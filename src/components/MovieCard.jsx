// src/components/MovieCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre} | {movie.time}</p>
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/booking/${movie.id}`)}>Забронювати</button>
    </div>
  );
}

export default MovieCard;
