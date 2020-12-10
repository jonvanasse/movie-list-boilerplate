import React from 'react';
import MovieList from './MovieList.jsx';
import NavBar from './NavBar.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {movies};
  }

  render() {
    return (
      <div className="movieList">
        <NavBar/>
        {this.state.movies.map(movie =>
          <MovieList movie={movie}/>)}
      </div>
    );
  }
}

export default App;
