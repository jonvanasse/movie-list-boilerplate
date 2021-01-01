import React from 'react';
// import MovieItem from './MovieItem.jsx';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
  }

  whichList(event) {
    console.log(event);
  }

  render() {
    return (
          <div className="movieListing">
            <h5 key={this.props.movie.title}>{this.props.movie.title}</h5>
          </div>
    )

  }
}

export default MovieList
