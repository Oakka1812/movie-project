/* eslint-disable jsx-a11y/anchor-is-valid */
import { TextInput } from "flowbite-react";
import React, { useRef } from "react";
import {api, api_key} from '../api/api'
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {

  const movieName = useRef();
  const dispatch = useDispatch();

  //get movies data from api using api key
  const searchMovie = async () => {
    if(movieName.current.value !== ''){
      const response = await api.get(`/search/movie?query=${movieName.current.value}&api_key=${api_key}`)
      dispatch(fetchMovies(response.data.results))
    }else{
      const response = await api.get(`/movie/now_playing?api_key=${api_key}`)
      dispatch(fetchMovies(response.data.results))//passing to movies state
    }
    movieName.current.value = '';
  }
  return (
    <nav className="bg-white w-full mb-6 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          OKS Channel
        </span>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <form action="">
            <div className="flex">
              <TextInput ref={movieName} placeholder="Search Movies..." />
              <button type="button" className="bg-black text-white px-3 rounded-lg ms-2" onClick={() => searchMovie()}>Search</button>
            </div>
          </form>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
        </div>
      </div>
    </nav>
  );
};

export default Header;
