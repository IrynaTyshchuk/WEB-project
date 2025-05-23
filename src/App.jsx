import { useState } from 'react';
import { Film } from 'lucide-react';
import MovieList from './components/MovieList';
import moviesData from './data/movies';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Шапка */}
      <div className="header">
        <div className="left">м. Львів</div>
        <div className="right">
          <Film size={16} />
          Світ
        </div>
      </div>

      {/* Пошук */}
      <input
        type="text"
        placeholder="Пошук фільму..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Список фільмів */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
