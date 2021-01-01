import React from 'react';
import MovieList from './MovieList.jsx';

class MovieBox extends React.Component {

  constructor(props) {
    super(props);
  }

  whichList(event) {
    console.log(event);
  }

  render() {
    return (

      // div container
      <div>
        {/* div for two radio buttons, watched and unwatched (unwatched being the default selected via constructor's initial state) */}

{/*         // table with a className corresponding to the watched property's boolean value

          // MovieItem?

              OR

          // h5 element from below with the watch party specified

        // table with a className corresponding to the opposite state of the watched property's boolean value

          // MovieItem?

              OR

          // h5 element from below with the watch party specified
 */}
        <MovieList movies={this.props.movies}/>
      {/* // close the list container */}
      </div>
    )

  }
}

export default MovieBox
