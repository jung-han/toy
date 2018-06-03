import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

export default class Footer extends Component {
  getLeftCnt = (todos) => {
    let cnt = 0;
    _.map(todos, (todo) => {
      if (!todo.isComplete) {
        cnt += 1;
      }
    });
    return cnt;
  }

  changeShowOption = (ev) => {
    const btn = ev.target;
    
    this.props.changeShowOption(btn.textContent);
  }

  render() {
    const {todosEntity, showOption} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.getLeftCnt(todosEntity)}</strong><span> items</span><span> left</span>  
        </span>
        <ul className="filters">
          <li>
            <button 
              disabled={showOption === 'All' ? false : false}
              className={`filter-item ${showOption === 'All' ? 'selected' : ''}`}
              onClick={(ev)=>this.changeShowOption(ev)}>
              All
            </button>  
          </li>
          <li>
            <button 
              disabled={showOption === 'Active' ? true : false}
              className={`filter-item ${showOption === 'Active' ? 'selected' : ''}`}
              onClick={(ev)=>this.changeShowOption(ev)}>
              Active
            </button>  
          </li>
          <li>
            <button
              disabled={showOption === 'Completed' ? true : false}
              className={`filter-item ${showOption === 'Completed' ? 'selected' : ''}`}
              onClick={(ev)=>this.changeShowOption(ev)}>
              Completed
            </button>  
          </li>  
        </ul>
        <button className="clear-completed" onClick={()=>this.props.clearCompletedTodos()}>Clear completed</button>  
      </footer>
    )
  }
};