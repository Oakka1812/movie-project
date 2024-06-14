/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectMovie } from "../redux/action/movies";
import Spinner from "./spinner/Spinner";

const MovieDetail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieDetail = async () => {
    // fetching one movie with specific id
    const response = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    dispatch(selectMovie(response.data));
  };

  useEffect(() => {
    if (movieId) {
      movieDetail();
    }
    return () => dispatch(removeSelectedMovie({})); //cleaning selected movie object
  }, []);

  //getting movie objet from state using useSelector
  let movie = useSelector((state) => state.movies.movie);

  //date format
  const releaseDate = movie.release_date;
  const date = new Date(releaseDate);
  const dateArr = date.toDateString().split(" ");

  //runtime format
  const moiveRunTime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return [hours, minutes];
  };
  const [hours, minutes] = moiveRunTime(movie.runtime);

  return (
    <>
      {JSON.stringify(movie) === "{}" ? (
        <div className="mx-auto">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-around items-center">
          <div>
            <span
              className="text-2xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              <i className="fa-solid fa-arrow-left text-lg  text-red-600"></i>
            </span>
          </div>
          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl ">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {movie.title}
              </h5>
              <div className="text-sm mb-4 leading-6">
                <p>Runtime : {`${hours}h ${minutes}min`}</p>
                <p>
                  Release Date : {`${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`}
                </p>
                <p>Original Country : {movie.original_language}</p>
                <p>Original Title : {movie.original_title}</p>
              </div>
              <p className="mb-3 font-normal text-gray-700">{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
