import React from 'react';

class MovieItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title: this.props.movie.title,
      id: this.props.movie.id,
      watched: this.props.movie.watched,
      searched: this.props.searched
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
      <li className={`movieItem ${view === 'search' && this.state.searched ? 'visible' : view === 'all' && !this.state.searched ? 'visible' : view === 'watched' && watched && !this.state.searched ? 'visible' : view === 'unwatched' && !watched && !this.state.searched ? 'visible' : 'not-visible'}`} key={this.props.movie.id}>
        <h3>{this.props.movie.title}</h3>
        <span className={`watchButton ${watched ? 'watched' : 'unwatched'}`} onClick={this.handleClick}>{watched ? 'watched' : 'not watched'}</span>
      </li>
    )
  }

}

export default MovieItem;
