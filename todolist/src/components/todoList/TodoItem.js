import React from 'react';

const TodoItem = (props) => {
  const {id, todo:{text, isComplete}, toggleTodo, deleteTodo} = props;
  return (
    <li className={isComplete ? 'complete' : 'active'}>
      <div className="view">
        <input type="checkbox" className="toggle" checked={isComplete} onChange={(ev)=>toggleTodo(id)} />
        <label>{text}</label>
        <button className="destroy" onClick={(ev)=>deleteTodo(id)}></button>  
      </div>
    </li>
  )
};

export default TodoItem;
