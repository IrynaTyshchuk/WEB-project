import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CinemaHall.css';
function CinemaHall() {
  const rows = 6;
  const cols = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]); 
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, date } = location.state || {};
  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    if (bookedSeats.includes(seatId)) return;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };
  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Будь ласка, оберіть місця для бронювання.');
      return;
    }
    setBookedSeats(prev => [...prev, ...selectedSeats]);
    alert(`Ви забронювали місця: ${selectedSeats.join(', ')}`);
    console.log('Заброньовані місця:', [...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]); 
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
                role="button"
                tabIndex={isBooked ? -1 : 0}
                onKeyDown={e => { if (e.key === 'Enter' && !isBooked) toggleSeat(row, col); }}
                aria-pressed={isSelected}
                aria-label={`Місце ${row + 1}-${col + 1} ${isBooked ? 'заброньоване' : isSelected ? 'обране' : 'вільне'}`}
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
      <button 
        className="booking-button"
        onClick={handleBooking}
        disabled={selectedSeats.length === 0}
        aria-disabled={selectedSeats.length === 0}
      >
        Забронювати
      </button>
      <button 
        className="back-button"
        onClick={goBack}
      >
        Повернутися до вибору фільмів
      </button>
    </div>
  );
}
export default CinemaHall;
