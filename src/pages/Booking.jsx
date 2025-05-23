import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingService from '../services/BookingService';
import CinemaHall from '../components/CinemaHall';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking() {
  const { id } = useParams();
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Дані форми
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    BookingService.getBookedSeats(id).then(setBookedSeats);
  }, [id]);
  const handleSelectSeats = seats => {
    setSelectedSeats(seats);
  };
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Ім\'я обов\'язкове';
    if (!formData.phone.trim()) errs.phone = 'Телефон обов\'язковий';
    if (!formData.email.trim()) {
      errs.email = 'Email обов\'язковий';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Невірний формат email';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookingClick = () => {
    if (selectedSeats.length === 0) {
      toast.error('Оберіть місця для бронювання!');
      return;
    }
    setShowForm(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    BookingService.bookSeats(id, selectedSeats, formData).then(() => {
      toast.success('Бронювання успішне!');
      setSelectedSeats([]);
      setShowForm(false);
      setFormData({ name: '', phone: '', email: '' });

      BookingService.getBookedSeats(id).then(setBookedSeats);
    });
  };

  return (
    <div>
      <h1>Бронювання фільму {id}</h1>

      <CinemaHall
        movieId={id}
        bookedSeats={bookedSeats}
        onSelectSeats={handleSelectSeats}
        selectedSeats={selectedSeats}
      />

      {!showForm && (
        <button onClick={handleBookingClick} style={{ marginTop: '20px' }}>
          Забронювати
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px', maxWidth: '300px' }}>
          <div>
            <label>Ім'я:</label><br />
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>
          <div>
            <label>Телефон:</label><br />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
          </div>
          <div>
            <label>Email:</label><br />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>
            Підтвердити бронювання
          </button>
        </form>
      )}

      <ToastContainer />
    </div>
  );
}

export default Booking;
