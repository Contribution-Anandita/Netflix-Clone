 import React, { useEffect, useState } from "react";
 import axiosRequest from "./axios";
 import './Row.css'

 function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies]=useState([]);
    const baseURL="https://image.tmdb.org/t/p/original";


     /*UseEffect runs on the basis of specific condition/variable
     it takes 2 arguments 1-callback functions and other is dependency []
     if [], run once when row loads only.
     if [movies] it run once when row loads and then every single time 
     when movie changes*/
     useEffect(()=>{
        async function fetchMovies() {
            const request=await axiosRequest.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchMovies();
     },[fetchUrl]);

     console.log(movies);

     //since request depends on variable fetchUrl it has to be included in dependencies

     return(
         <div className="row">
             <h2>{title}</h2>
             <div className="row_posters">
             {/*several posters will populate in a row*/}
             {movies.map(movie=>(
                 <img className={`row_poster ${isLargeRow&&"row_posterLarge"}`}
                 key={movie.id}
                 src={`${baseURL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}  
                 alt={movie?.title||movie?.name||movie?.original_title||movie?.original_name||""}/>
             ))}

             </div>
         </div>
     )
 }
 export default Row