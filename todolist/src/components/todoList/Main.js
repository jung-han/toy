import React, { Component } from 'react';
import _ from 'lodash';
import TodoItem from '../../containers/todoList/TodoItem';

export default class Main extends Component {
  render() {
    const {todosId, todosEntity, showOption, toggleTodo, deleteTodo} = this.props;
    return (
      <section className={`main ${showOption}`}>
        <ul className="todo-list">
          {
            _.map(todosId, (todoId) => {
              return <TodoItem
                todo={todosEntity[todoId]}
                key={todoId}
                id={todoId}
              />
            })
          }
        </ul>  
      </section>
    )
  }
};
