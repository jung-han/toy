import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODO,
  CHANGE_SHOW_OPTION,
  INIT_TODOLIST,
  BRING_BACK_TODO
} from '../actions/todoList';
import dotProp from 'dot-prop-immutable';
import _ from 'lodash';
import {initialState} from '../store';

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
  let newState = dotProp.set(state, `removedId`, list => [...list, id]);
  newState = dotProp.set(newState, `removedEntity.${id}`, dotProp.get(newState, `todosEntity.${id}`));
  newState = dotProp.delete(newState, `todosEntity.${id}`);
  newState = dotProp.delete(newState, `todosId.${idx}`);

  return newState;
}

function clearCompletedTodos(state) {
  let todosId = [];
  let todosEntity = {};
  let completedId = [...state.removedId];
  let completedEntity = {...state.removedEntity};

  _.forEach(state.todosEntity, (todo, key) => {
    if (!todo.isComplete) {
      todosId.push(key);
      todosEntity[key] = todo;
    } else {
      completedId.push(key);
      completedEntity[key] = todo;
    }
  });

  return {
    ...state,
    todosId,
    todosEntity,
    removedId: completedId,
    removedEntity: completedEntity
  };
}

function initTodoList(state, todosId, todosEntity) {
  let newState = dotProp.set(state, 'todosId', todosId);
  newState = dotProp.set(newState, 'todosEntity', todosEntity);
  newState = dotProp.set(newState, 'isFetchTodoList', true);

  return newState;
}

function bringbackTodo(state, id) {
  const idx = state.removedId.indexOf(id);
  let newState = dotProp.set(state, `todosId`, list => [...list, id]);
  newState = dotProp.set(newState, `todosEntity.${id}`, dotProp.get(newState, `removedEntity.${id}`));

  newState = dotProp.delete(newState, `removedEntity.${id}`);
  newState = dotProp.delete(newState, `removedId.${idx}`);

  return newState;
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
    case 'INIT_TODOLIST':
      return initTodoList(state, action.todosId, action.todosEntity);
    case 'BRING_BACK_TODO':
      return bringbackTodo(state, action.id);
    default:
      return state;
  }
}