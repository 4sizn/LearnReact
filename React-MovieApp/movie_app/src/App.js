import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
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

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      say :"hello"
    }; 
  }

  //Render cycle : componentWillMount() -> render() -> componentDidMount()
  //Updating cycle : componentWillReceiveProps()-> shouldComponentUpdate()-> componentWillUpdate()->render()->componentDidUpdate()

  componentWillMount(){
    setTimeout(() => {
      this.setState({
        say: "hello again"
      })
    }, 3000);
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        say:"good bye"
      })
    }, 3000);
  }
  
  render() {
    return (
      <div className="App">
        {this.state.say}
       {
         movies.map((movie, i)=> {
           return (<Movie
            title = {movie.title} 
            poster  = {movie.poster}
            key = {i}
           Movie/>);
           })
       }
      </div>
    );
  }
}

export default App;
