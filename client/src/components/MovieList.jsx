import React from 'react';
import MovieItem from './MovieItem.jsx';

class MovieList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div id="movieContainer">
        <ul id="movieList">
          {this.props.movies.map(movie => <MovieItem movie={movie} key={movie.id} toggleMovie={this.props.toggleMovie} view={this.props.view} />)}
        </ul>
      </div>
    )

  }
}

export default MovieList
