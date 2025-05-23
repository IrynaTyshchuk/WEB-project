import React, { useState } from 'react';
import './CinemaHall.css'; // Додай стилі як показано нижче

function CinemaHall() {
  const rows = 6;
  const cols = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div>
      <div className="cinema-grid">
        {[...Array(rows)].map((_, row) =>
          [...Array(cols)].map((_, col) => {
            const seatId = `${row}-${col}`;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <div
                key={seatId}
                className={`seat ${isSelected ? 'selected' : 'available'}`}
                onClick={() => toggleSeat(row, col)}
              >
                {row + 1}-{col + 1}
              </div>
            );
          })
        )}
      </div>
      <div>
        <h4>Обрані місця:</h4>
        <p>{selectedSeats.join(', ') || 'Немає обраних місць'}</p>
      </div>
    </div>
  );
}

export default CinemaHall;
