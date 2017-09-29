import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      say :"hello",
    }; 
  }

  //Render cycle : componentWillMount() -> render() -> componentDidMount()
  //Updating cycle : componentWillReceiveProps()-> shouldComponentUpdate()-> componentWillUpdate()->render()->componentDidUpdate()

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title: "matrix",
            poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
          },
          {
            title: "Oldboy",
            poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
          },
          {
            title: "star wars",
            poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
          }
        ]  
      })
    }, 1000);
  }
  _renderMovies = () => {
   const movies =  this.state.movies.map((movie, i)=> {
      return (<Movie
       title = {movie.title} 
       poster  = {movie.poster}
       key = {i}
      Movie/>);
      })
      return movies;
  }
  render() {
    return (
      <div className="App">
      {
        //데이터가 없으면 loading이 뜨고 
        //있으면 데이터를 _renderMovie함수 호출
       this.state.movies ? this._renderMovies() : "Loading"
      }
      </div>
    );
  }
}

export default App;
