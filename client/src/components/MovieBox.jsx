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
        <div onChange={event => this.whichList(event)}>
          {/* // first button */}
          <button type="radio" value="true" name="watched"/> Watched

          {/* // second button */}
          <button type="radio" value="false" defaultChecked name="unwatched"/> Unwatched
          {/* // close the radio button container */}
        </div>
{/*         // table with a className corresponding to the watched property's boolean value

          // MovieItem?

              OR

          // h5 element from below with the watch party specified

        // table with a className corresponding to the opposite state of the watched property's boolean value

          // MovieItem?

              OR

          // h5 element from below with the watch party specified
 */}
          <div className="movieListing">
            <h5 key={this.props.movie.title}>{this.props.movie.title}</h5>
          </div>
      // close the container
      </div>
    )

  }
}

export default MovieBox
