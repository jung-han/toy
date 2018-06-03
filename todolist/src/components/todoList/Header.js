import React, { Component } from 'react';

const ENTERKEY_CODE = 13;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      val: ''
    }
  }
  onChange = (ev) => {
    this.setState({val: ev.target.value});
  }
  onKeyDown = (ev) => {
    if (ev.keyCode === ENTERKEY_CODE) {
      this.props.addTodo(ev.target.value);
      this.setState({val: ''});
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.val}
          onKeyDown={(ev) => this.onKeyDown(ev)}
          onChange={(ev) => this.onChange(ev)}
        />  
      </header>
    )
  }
};
