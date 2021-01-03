import React from 'react';

class AddBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'a movie to the list...'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onFocusAdd = this.onFocusAdd.bind(this);
    this.onBlurAdd = this.onBlurAdd.bind(this);

  }

  handleSubmit() {
    var title = this.state.title;
    this.setState({title: ''});
    this.props.addMovie(title);
  }

  handleChange(event) {
    var newChar = event.target.value;
    this.setState({title: newChar})
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  onFocusAdd(event) {
    this.setState({title: ''})
    event.target.value = '';
  }

  onBlurAdd(event) {
    this.setState({title: 'a movie to the list...'})
    event.target.value = 'a movie to the list...';
  }

  render() {
    return (
      <div className="navbar">
        <button onClick={this.handleSubmit}>Add</button>
        <input type="text" name="add" onChange={this.handleChange} onKeyPress={this.handleKeyPress} onSubmit={this.handleSubmit} onFocus={this.onFocusAdd} onBlur={this.onBlurAdd} defaultValue={this.state.title}></input>
      </div>
    )
  }
}

export default AddBar
