import React from 'react';
import ToggleButton from './ToggleButton.jsx';

class ToggleBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const views = ['all', 'watched', 'unwatched', 'search']

    return (
      <div id="toggleBar">
        {views.map(each => <ToggleButton id={each} view={this.props.view} changeView={this.props.changeView}/>)}
      </div>
    )
  }

}

export default ToggleBar;
