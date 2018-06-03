import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODO,
  CHANGE_SHOW_OPTION
} from '../actions/todoList';
import dotProp from 'dot-prop-immutable';
import _ from 'lodash';

const initialState = {
  todosId: [],
  todosEntity: {},
  showOption: 'All'
}

function addTodo(state, text) {
  if (!text) {
    return;
  }
  const id = Date.now();
  let newState = dotProp.set(state, 'todosId', list => [...list, id]);
  newState = dotProp.set(newState, `todosEntity.${id}`,
    {
      text,
      isComplete: false
    }
  );
  return newState;
}

function deleteTodo(state, id) {
  const idx = state.todosId.indexOf(id);
  let newState = dotProp.delete(state, `todosEntity.${id}`);
  newState = dotProp.delete(newState, `todosId.${idx}`);
  return newState;
}

function clearCompletedTodos(state) {
  let todosId = [];
  let todosEntity = {};

  _.forEach(state.todosEntity, (todo, key) => {
    if (!todo.isComplete) {
      todosId.push(key);
      todosEntity[key] = todo;
    }
  });

  return {
    ...state,
    todosId,
    todosEntity
  };
}

export default function(state=initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.text);
    case 'TOGGLE_TODO':
      return dotProp.toggle(state, `todosEntity.${action.id}.isComplete`);
    case 'DELETE_TODO':
      return deleteTodo(state, action.id);
    case 'CLEAR_COMPLETED_TODO':
      return clearCompletedTodos(state);
    case 'CHANGE_SHOW_OPTION':
      return dotProp.set(state, 'showOption', action.option);
    default:
      return state;
  }
}