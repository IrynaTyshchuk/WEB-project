import React, { useState } from 'react';
import moviesData from './data/movies';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const genres = Array.from(new Set(moviesData.map(movie => movie.genre)));

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!activeGenre || movie.genre === activeGenre)
  );

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setSelectedDate(null);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setSelectedDate(null);
  };

  const confirmDate = () => {
    if (selectedDate) {
      alert(`Ви обрали сеанс на ${selectedDate} для фільму "${selectedMovie.title}"`);
      closeModal();
    } else {
      alert("Оберіть дату сеансу!");
    }
  };

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

      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => openModal(movie)}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') openModal(movie); }}
            role="button"
            aria-label={`Відкрити вибір сеансу для фільму ${movie.title}`}
          >
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p className="genre-time">{movie.genre} | {movie.time}</p>
            <p className="description">{movie.description}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            <p>Оберіть дату сеансу:</p>
            <div className="date-list">
              {selectedMovie.dates.map(date => (
                <button
                  key={date}
                  className={`date-btn ${selectedDate === date ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </button>
              ))}
            </div>
            <div className="modal-actions">
              <button onClick={confirmDate} className="confirm-btn">Підтвердити</button>
              <button onClick={closeModal} className="cancel-btn">Скасувати</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
