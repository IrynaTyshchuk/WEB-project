import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          {...movie}
          onClick={() => onMovieClick(movie)}
        />
      ))}
    </div>
  );
}

export default MovieList;
