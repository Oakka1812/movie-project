/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Movies from '../components/Movies'
import {api, api_key} from '../api/api'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/action/movies'

const Home = () => {

  const dispatch = useDispatch()

  const getMovies = async () => {
    const response = await api.get(`/movie/now_playing?api_key=${api_key}`)
    //get movies data from api using api key

    dispatch(fetchMovies(response.data.results))//passing to movies state
  }

  useEffect(() => {
    getMovies();
  },[])
  return (
    <div>
    <Movies/>
    </div>
  )
}

export default Home
