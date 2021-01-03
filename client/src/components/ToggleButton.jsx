import React from 'react';

class ToggleButton extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.changeView(event.target.id)
  }

  render() {

    return (
      <div id={this.props.id} className={`toggleDiv ${this.props.view === this.props.id ? 'toggled' : 'untoggled' }`} onClick={this.handleClick}>
        {this.props.id}
      </div>
    )
  }

}

export default ToggleButton;
