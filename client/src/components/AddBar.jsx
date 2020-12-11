import React from 'react';

class AddBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
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

  onFocusAdd(event) {
    this.setState({title: ''})
    event.target.value = '';
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <label id="addBar">
        <input type="text" name="add" onChange={this.handleChange} onKeyPress={this.handleKeyPress} onSubmit={this.handleSubmit} onFocus={this.onFocusAdd}></input>
        <button>Add movie</button>
      </label>
    )
  }
}

export default AddBar
