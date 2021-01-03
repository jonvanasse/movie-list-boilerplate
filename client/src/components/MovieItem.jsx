import React from 'react';

class MovieItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: this.props.movie.title,
      id: this.props.movie.id,
      watched: this.props.movie.watched
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var id = this.props.movie.id;
    var oldState = this.state.watched;
    this.setState({watched: !oldState})
    this.props.toggleMovie(id);
  }

  render() {

    const watched = this.state.watched;
    const view = this.props.view;

    return (
      <li className={`movieItem ${view === 'all' ? 'visible' : view === 'watched' && watched ? 'visible' : view === 'unwatched' && !watched ? 'visible' : 'not-visible'}`} key={this.props.movie.id}>
        <h3>{this.props.movie.title}</h3>
        <span className={`watchButton ${watched ? 'watched' : 'unwatched'}`} onClick={this.handleClick}>{watched ? 'watched' : 'not watched'}</span>
      </li>
    )
  }

}

export default MovieItem;
