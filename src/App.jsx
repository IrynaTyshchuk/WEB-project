import React, { useState } from 'react';
import MovieList from './components/MovieList';
import moviesData from './data/movies';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState(null);

  const genres = Array.from(new Set(moviesData.map(movie => movie.genre)));

  // Фільтрація фільмів за пошуком і жанром
  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!activeGenre || movie.genre === activeGenre)
  );

  return (
    <div className="app">
      <header className="header">
        <div className="right">
          Світ кіно
          <svg viewBox="0 0 64 64" width="42" height="42" fill="white">
            <circle cx="32" cy="32" r="24" fill="black" />
            <circle cx="22" cy="22" r="4" fill="white" />
            <circle cx="42" cy="22" r="4" fill="white" />
            <circle cx="22" cy="42" r="4" fill="white" />
            <circle cx="42" cy="42" r="4" fill="white" />
            <path d="M56 48 Q64 56 48 56" stroke="black" strokeWidth="4" fill="none" />
          </svg>
        </div>

        <div className="search-and-genres">
          <input
            type="text"
            placeholder="Пошук фільму..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="genres">
            <span
              className={`genre-tag ${activeGenre === null ? 'active' : ''}`}
              onClick={() => setActiveGenre(null)}
            >
              Всі жанри
            </span>
            {genres.map((genre, index) => (
              <span
                key={index}
                className={`genre-tag ${activeGenre === genre ? 'active' : ''}`}
                onClick={() => setActiveGenre(activeGenre === genre ? null : genre)}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="left">м. Львів</div>
      </header>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
