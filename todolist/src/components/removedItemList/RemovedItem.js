import React, { Component } from 'react';

export default class RemovedItem extends Component {
  render() {
    const {id, entity: {text, isComplete}, bringBackTodo} = this.props;
    return (
      <li className={isComplete ? 'complete' : 'active'}>
        <div className="view">
          <label>{text}<button className='bringBackBtn' onClick={(ev) => bringBackTodo(id)}>되살리기</button></label>
        </div>
      </li>
    )
  }
};
