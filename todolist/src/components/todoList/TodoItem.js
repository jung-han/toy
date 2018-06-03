import React from 'react';

const TodoItem = (props) => {
  const {id, todo, toggleTodo, deleteTodo} = props;
  const {text, isComplete} = todo;
  return (
    <li className={isComplete ? 'complete' : 'active'}>
      <div className="view">
        <input type="checkbox" className="toggle" value="on" defaultChecked={isComplete} onChange={(ev)=>toggleTodo(id)} />
        <label>{text}</label>
        <button className="destroy" onClick={(ev)=>deleteTodo(id)}></button>  
      </div>
      <input className="edit" value={text} />
    </li>
  )
};

export default TodoItem;
