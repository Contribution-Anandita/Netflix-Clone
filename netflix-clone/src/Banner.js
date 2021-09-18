import React, { useEffect, useState } from 'react'
import axiosRequest from './axios'
import requests from './request'
import "./Banner.css"

function Banner() {
    const [movie,setMovie]=useState([])
    const baseURL="https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        async function fetchMovieDetails(){
            const request=await axiosRequest.get(requests.fetchNetflixOriginals);
            console.log(Math.floor(Math.random()*request.data.results.length));
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            return request
        }
        fetchMovieDetails();
    },[])
    console.log(movie)

    function truncate(str,n){
       return str?.length > n ? str.substr(0,n) + '...' : str;
    }


    return (
       <header className="banner"
        style={{
          backgroundPostion:"center center",
          backgroundImage:`url(
              ${baseURL}${movie?.backdrop_path}
              )`,
          backgroundSize:"cover"
        }}
        >
          {/* Background image */}   
         <div className="banner_contents">
         {/* title */}
         <h1 className="banner_title">{movie?.title||movie?.name||movie?.original_title||movie?.original_name||""}</h1>
         {/* 2 buttons */}
         <div className="banner_buttons">
             <button className="banner_button">Play</button>
             <button className="banner_button">My List</button>
        </div>
         {/* description */}
         <h1 className="banner_description">{truncate(movie?.overview,200)}</h1>
         </div>
         <div className="fade-effect"></div>
       </header>
    )
}

export default Banner
