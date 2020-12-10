import React from 'react';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';

var movies = [
  {
    title: 'Mean Girls',
    id: 1
  },
  {
    title: 'Hackers',
    id: 2
  },
  {
    title: 'The Grey',
    id: 3
  },
  {
    title: 'Sunshine',
    id: 4
  },
  {
    title: 'Ex Machina',
    id: 5
  },
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      movies: [...movies],
      allMovies: [...movies]
    };
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(title) {
    var allMovies = [...this.state.allMovies];
    var indexes = allMovies.map(movie => movie.title.includes(title))
    var results = [];
    for (var i = 0; i < indexes.length; i++) {
      if (indexes[i] === true) {
        results.push(allMovies[i]);
      }
    }
    if (results.length === 0) {
      console.log('No results');
      this.setState({movies: [...allMovies]});
    } else {
      this.setState({movies: [...results]});
    }
  }

  render() {
    return (
      <div className="movieList">
        <NavBar searchMovies={this.searchMovies}/>
        {this.state.movies.map(movie =>
          <MovieList movie={movie}/>)}
      </div>
    );
  }
}

export default App;
