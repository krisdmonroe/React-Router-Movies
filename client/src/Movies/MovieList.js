import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const MovieList = props => {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const {title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    </Link>
  );
}

export default MovieList;
