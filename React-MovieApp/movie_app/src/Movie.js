import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
      <h1>{this.props.title}</h1>
        <MoviePoster poster = {this.props.poster}/>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return(
     <div>
    <img src={this.props.poster} alt = ""/>>
    </div>
    )
  }
}

Movie.propTypes = {
    title :PropTypes.string.isRequired,
    poster :PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster :PropTypes.string.isRequired
}

export default Movie;
