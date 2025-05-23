import React from 'react';

function MovieCard({ title, description, genre, time, image, onClick }) {
  return (
    <div
      className="movie-card"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
      role="button"
      aria-label={`Відкрити вибір сеансу для фільму ${title}`}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="genre-time">{genre} | {time}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default MovieCard;
