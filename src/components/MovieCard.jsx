import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movies/details/${movie.id}`}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {movie.title}
            </h5>
            <span className="tex-sm">{movie.tagline}</span>
            <p className="mb-3 font-normal text-gray-700">
              {movie.overview.slice(0, 100)}
            </p>

            <div className="flex">
              <p className="flex justify-center items-center bg-gray-700 text-white text-sm w-28 py-1 me-2 rounded-lg">
                <i className="fa-regular fa-calendar-days me-2"></i>
                {movie.release_date}
              </p>
              <p className="flex justify-center items-center bg-gray-700 text-white text-sm w-20 py-1 me-2 rounded-lg">
                <i className="fa-solid fa-star me-2"></i>
                {movie.vote_average}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
