import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
