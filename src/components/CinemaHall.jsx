import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingService from '../services/BookingService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CinemaHall.css';

function CinemaHall() {
  const rows = 6;
  const cols = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const { movie, date } = location.state || {};

  useEffect(() => {
    if (movie?.id || movie?.title) {
      const id = movie.id || movie.title;
      const booked = BookingService.getBookedSeats(id);
      setBookedSeats(booked);
    }
  }, [movie]);

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    if (bookedSeats.includes(seatId)) return;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Імʼя обовʼязкове';
    if (!formData.phone.trim()) errs.phone = 'Телефон обовʼязковий';
    if (!formData.email.trim()) {
      errs.email = 'Email обовʼязковий';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Невірний формат email';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      toast.error('Оберіть місця для бронювання.');
      return;
    }
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const movieId = movie.id || movie.title;
    BookingService.bookSeats(movieId, selectedSeats, formData)
      .then(() => {
        toast.success('Бронювання успішне!');
        setBookedSeats(prev => [...prev, ...selectedSeats]);
        setSelectedSeats([]);
        setFormData({ name: '', phone: '', email: '' });
        setShowForm(false);
      });
  };

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="cinema-hall-container">
      <header className="cinema-hall-header">
        Кінотеатр — {movie ? movie.title : 'Обрати фільм'}
      </header>

      {movie && (
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p><strong>Жанр:</strong> {movie.genre}</p>
          <p><strong>Тривалість:</strong> {movie.time}</p>
          <p><strong>Дата сеансу:</strong> {date}</p>
          <p className="description">{movie.description}</p>
        </div>
      )}

      <div className="cinema-grid">
        {[...Array(rows)].map((_, row) =>
          [...Array(cols)].map((_, col) => {
            const seatId = `${row}-${col}`;
            const isSelected = selectedSeats.includes(seatId);
            const isBooked = bookedSeats.includes(seatId);
            return (
              <div
                key={seatId}
                className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
                onClick={() => toggleSeat(row, col)}
              >
                {row + 1}-{col + 1}
              </div>
            );
          })
        )}
      </div>

      <div className="selected-seats-info">
        <h4>Обрані місця:</h4>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Немає обраних місць'}</p>
      </div>

      {!showForm ? (
        <button
          className="booking-button"
          onClick={handleBooking}
          disabled={selectedSeats.length === 0}
        >
          Забронювати
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <h3>Введіть ваші дані</h3>
          <div>
            <label>Імʼя:</label><br />
            <input name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <label>Телефон:</label><br />
            <input name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div>
            <label>Email:</label><br />
            <input name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <button type="submit" className="confirm-button">
            Підтвердити бронювання
          </button>
        </form>
      )}

      <button className="back-button" onClick={goBack}>
        Повернутися до вибору фільмів
      </button>

      <ToastContainer />
    </div>
  );
}

export default CinemaHall;
