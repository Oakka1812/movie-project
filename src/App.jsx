import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import PageNotFound from './components/PageNotFound'
import MovieDetail from './components/MovieDetail'


const App = () => {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies/details/:movieId' element={<MovieDetail/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
