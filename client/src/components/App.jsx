import React from 'react';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';
// import styles from './haven'tdonethisyet'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      visibleMovies: [],
      view: 'all',
      nextId: 0,
      searchResults: []
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleMovie = this.toggleMovie.bind(this);
    this.changeView = this.changeView.bind(this);
    // PLANNING TO USE THE FOLLOWING TO ANIMATE SEARCH RESULTS IN ALTENATE VIEWS
    this._handleSearchNoResults = this._handleSearchNoResults.bind(this);
    // NOT YET IMPLEMENTED - this._handleSearchResultsInOtherList = this._handleSearchResultsInOtherList.bind(this);
  }

  searchMovies(title) {
    var movies = [...this.state.movies];
    var indexes = movies.map(movie => movie.title.includes(title));
    var results = [];
    for (var i = 0; i < indexes.length; i++) {
      if (indexes[i] === true) {
        results.push(movies[i]);
      }
    }
    if(results.length === 0) {
      this._handleSearchNoResults();
    } else {
      this.setState({searchResults: [...results]});
    }
  }

  addMovie(title) {
    var movies = [...this.state.movies];
    var view = this.state.view;
    var movie = Object.create({title: title, id: this.state.nextId, watched: false})
    movies.push(movie);
/*     if (view === 'all' || view === 'unwatched') {
      var visibleMovies = [...this.state.visibleMovies];
      visibleMovies.push(movie)
      this.setState({
        visibleMovies: visibleMovies,
        movies: [...movies],
        nextId: this.state.nextId ++
      })
    } else {
       */this.setState({
        movies: [...movies],
        nextId: this.state.nextId ++
      });
    /* } */
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

/*   regenera{      var movies = [...this.state.movies]
    if (view === 'all') {
      this.setState({visibleMovies: [...movies], view: view})
    } else {
      var visibleMovies = [];
      var watched = view === 'watched';
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].watched === watched) {
          visibleMovies.push(movies[i]);
        }
      }
      this.setState({visibleMovies: [...visibleMovies], view: view})
    }
  } */

  _handleSearchNoResults() {
    console.log('no search results');
  }

/* NOT YET IMPLEMENTED
  _handleSearchResultsInOtherList() {
    console.log('search results in other list');
  } */

  render() {

    const movies = [...this.state.movies];
    const view = this.state.view;

    return (
      <div id="body">
        <NavBar searchMovies={this.searchMovies} addMovie={this.addMovie} changeView={this.changeView} view={view}/>
        <MovieList movies={movies} toggleMovie={this.toggleMovie} changeView={this.changeView} view={view}/>
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
