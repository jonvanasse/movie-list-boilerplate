import React from 'react';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';
// import AddBar from './AddBar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      visibleMovies: [],
      nextId: 0
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleList = this.toggleList.bind(this);
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
      this.setState({visibleMovies: [...allMovies]});
      alert('No results');
    } else {
      this.setState({visibleMovies: [...results]});
    }
  }


  addMovie(title) {
    var movies = [...this.state.allMovies];
    movies.push({title: title, id: this.state.nextId});
    this.setState({
      allMovies: [...movies],
      visibleMovies: [...movies],
      nextId: this.state.nextId ++
    });
  }

  toggleList(watched) {
    console.log(watched);
  }

  render() {
    return (
      <div className="movieList">
        <NavBar searchMovies={this.searchMovies} addMovie={this.addMovie} toggleList={this.toggleList}/>
        {/* <AddBar /> */}
        {this.state.visibleMovies.map(movie =>
            <MovieList movie={movie}/>)}
      </div>
    );
  }
}

export default App;
