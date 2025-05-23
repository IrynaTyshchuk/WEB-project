import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import moviesData from '../data/movies';
function Booking() {
  const { id } = useParams();
  const location = useLocation();
  const { title, date, time } = location.state || {};
  const movie = moviesData.find((m) => m.id.toString() === id);
  if (!movie) return <p>Фільм не знайдено</p>;
  return (
    <div>
      <h2>Бронювання квитків</h2>
      <p><strong>Фільм:</strong> {title || movie.title}</p>
      <p><strong>Дата:</strong> {date || 'Невідомо'}</p>
      <p><strong>Час:</strong> {time || movie.time}</p>
      <CinemaHall />
    </div>
  );
}
export default Booking;
