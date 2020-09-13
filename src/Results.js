import React from 'react';
import "./Results.css";
import VideoCard from "./VideoCard"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({selectedOption}) {
    const [movies,setMovies]=useState([]);
    useEffect(() =>{
            //run this code Every Time the Result component load / mounts
            async function fetchData(){
                const request = await axios.get(selectedOption);
                setMovies(request.data.results);
                return request;
            }
            fetchData();
    },[selectedOption])
    return (
        <div className="results">
            <FlipMove>
            {movies.map((movie)=>(
                  <VideoCard key={movie.id} movie={movie}/>
            ))}
            </FlipMove>
           
        </div>

    )
}
export default Results;