export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';
export const CHANGE_SHOW_OPTION = 'CHANGE_SHOW_OPTION';
export const INIT_TODOLIST = 'INIT_TODOLIST';
export const FETCH_TODOLIST  = 'FETCH_TODOLIST';
export const BRING_BACK_TODO = 'BRING_BACK_TODO';

export function fetchTodoList() {
  return {type: FETCH_TODOLIST};
}

export function addTodo(text) {
  return {type: ADD_TODO, text};
}

export function toggleTodo(id) {
  return {type: TOGGLE_TODO, id};
}

export function deleteTodo(id) {
  return {type: DELETE_TODO, id};
}

export function clearCompletedTodos() {
  return {type:CLEAR_COMPLETED_TODO};
}

export function changeShowOption(option) {
  return {type:CHANGE_SHOW_OPTION, option};
}

export function initTodoList(todosId, todosEntity) {
  return {type:INIT_TODOLIST, todosId, todosEntity};
}

export function bringBackTodo(id) {
  return {type: BRING_BACK_TODO, id};
}