import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={}; 
  }

  //Render cycle : componentWillMount() -> render() -> componentDidMount()
  //Updating cycle : componentWillReceiveProps()-> shouldComponentUpdate()-> componentWillUpdate()->render()->componentDidUpdate()

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
   const movies =  this.state.movies.map((movie)=> {
      return (<Movie
       title = {movie.title} 
       poster  = {movie.medium_cover_image}
       genres = {movie.genres}
       synopsis = {movie.synopsis}
       key = {movie.id}
      Movie/>);
      })
      return movies;
  }

  _callApi = () =>{
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
     .then(data => data.json())
     .then(json => json.data.movies)
     .catch( err => console.log(err))
   }
   
   _getMovies =async () =>{
    //await mode는 함수가 기능이 끝날때까지 기다린다.
    //Async모드 함수 이지만 await 모드 때문에 set state는 all api작업이 완료할때까지 실행되지 않는다.
    const  movies = await this._callApi();
    this.setState({
      movies
    })
  }

  render() {
    const movies = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {/* 데이터가 없으면 loading이 뜨고 
        있으면 데이터를 _renderMovie함수 호출 */}
       {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
