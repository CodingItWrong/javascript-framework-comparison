import React, { Component } from 'react';

export default class Reverser extends Component {
  constructor(props) {
    super(props);
    this.state = { message: props.message };
  }

  render() {
    let { message } = this.state;
    return <div>
      <input type="text" value={message} onChange={(e) => this.handleChange(e)} />
      <button onClick={() => this.reverse()}>Reverse Message</button>
    </div>
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  reverse() {
    let { message } = this.state;
    this.setState({
      message: message.split('').reverse().join(''),
    });
  }
}
