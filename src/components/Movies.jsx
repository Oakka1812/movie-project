/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import Spinner from "./spinner/Spinner";

const Movies = () => {
  let movies = [];
  movies = useSelector((state) => state.movies.movies);
  return (
    <>
      {movies.length > 0 ? (
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Movies;
