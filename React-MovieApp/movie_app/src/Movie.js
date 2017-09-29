import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({title, poster}){
    return (
        <div>
            {console.log({title})}
        <h1>{title}</h1>
          <MoviePoster poster = {poster}/>
        </div>
      );
}

function MoviePoster({poster}){
    return(
        <div>
       <img src={poster} alt = "Movie Poster"/>
       </div>
       )
}

Movie.propTypes = {
    title :PropTypes.string.isRequired,
    poster :PropTypes.string.is
}

MoviePoster.propTypes = {
    poster :PropTypes.string.isRequired
}

export default Movie;
