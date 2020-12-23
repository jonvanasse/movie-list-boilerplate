import React from 'react';

/* function addBar() {
  const [movie, setMovie] = useState('');

  return (
    <label id="addBar">
      <input type="text" name="add" onChange={this.handleChange} onKeyPress={this.handleKeyPress} onSubmit={this.handleSubmit} onFocus={this.onFocusAdd}></input>
      <button onClick={this.handleSubmit}>Add movie</button>
    </label>
  )
} */

class AddBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onFocusAdd = this.onFocusAdd.bind(this);

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
        <button onClick={this.handleSubmit}>Add movie</button>
      </label>
    )
  }
}

export default AddBar
