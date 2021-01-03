import React from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';


const TMDBKEY = '3b0de5aa0e5b9ea7abfd1bf93c952654';
const searchUrl = 'https://api.themoviedb.org/3/search/movie';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchResults: [],
      view: 'all',
      nextId: 0,
      searchResults: []
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleMovie = this.toggleMovie.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  searchMovies(title) {
    var results = [];
    var movies = [];
    axios.get(searchUrl, {
      params: {
        api_key: TMDBKEY,
        query: title
      }
    })
    .then(response => {
      results = [...response.data.results]
      for (var i = 0; i < results.length; i++) {
        movies.push({title: results[i].title, id: results[i].id, watched: false, searched: true})
      }
      this.setState(() => ({searchResults: [...movies], view: 'search'}))
    })
    .catch(error => console.log(error))
  }

  addMovie(title) {
    var movies = [...this.state.movies];
    var view = this.state.view;
    var movie = Object.create({title: title, id: this.state.nextId, watched: false, searched: false})
    movies.push(movie);
    this.setState({
      movies: [...movies],
      nextId: this.state.nextId ++
    });
  }

  toggleMovie(id) {
    let movies = [...this.state.movies];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === id) {
        let watched = movies[i].watched;
        movies[i].watched = !watched;
      }
    }
    this.setState({movies: [...movies]})
  }

  changeView(view = this.state.view) {
    this.setState({ view: view })
  }

  render() {

    const movies = [...this.state.movies];
    const searchResults = [...this.state.searchResults]
    const view = this.state.view;

    return (
      <div id="body">
        <NavBar searchMovies={this.searchMovies} addMovie={this.addMovie} changeView={this.changeView} view={view}/>
        <MovieList className={view !== 'search' ? 'visible' : 'not-visible'} movies={movies} toggleMovie={this.toggleMovie} changeView={this.changeView} view={view}/>
        <MovieList className={view === 'search' ? 'visible' : 'not-visible'} searched="true" movies={searchResults} toggleMovie={this.toggleMovie} changeView={this.changeView} view={view}/>
        <div id="footer">
          <p>brought to you by&nbsp;
            <a href="about:blank">@notArealHandle</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
