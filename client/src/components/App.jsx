import React from 'react';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';
import AddBar from './AddBar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toWatch: [],
      watched: [],
      nextId: 0
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  searchMovies(title) {
    var toWatch = [...this.state.toWatch];
    var indexes = toWatch.map(movie => movie.title.includes(title))
    var results = [];
    for (var i = 0; i < indexes.length; i++) {
      if (indexes[i] === true) {
        results.push(toWatch[i]);
      }
    }
    if (results.length === 0) {
      this.setState({watched: [...toWatch]});
      alert('No results');
    } else {
      this.setState({watched: [...results]});
    }
  }

  addMovie(title) {
    var movies = [...this.state.toWatch];
    movies.push({title: title, id: this.state.nextId});
    this.setState({
      toWatch: [...movies],
      watched: [...movies],
      nextId: this.state.nextId ++
    });
  }

  render() {
    return (
      <div className="movieList">
        <NavBar searchMovies={this.searchMovies}/>
        <AddBar addMovie={this.addMovie}/>
        {this.state.watched.map(movie =>
            <MovieList movie={movie}/>)}
      </div>
    );
  }
}

export default App;
