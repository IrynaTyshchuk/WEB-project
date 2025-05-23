import React from 'react';
import moviesData from '../data/movies';
import MovieList from '../components/MovieList';

function Home() {
  return <MovieList movies={moviesData} />;
}

export default Home;
