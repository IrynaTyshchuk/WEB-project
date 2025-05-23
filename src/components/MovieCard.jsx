function MovieCard({ title, description, genre, time, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Жанр:</strong> {genre}</p>
      <p><strong>Сеанс:</strong> {time}</p>
    </div>
  );
}

export default MovieCard;
