import React from 'react';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
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
