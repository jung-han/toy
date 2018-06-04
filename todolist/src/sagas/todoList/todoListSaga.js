import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {getLatestTodoList} from '../../service/todoList';
import {FETCH_TODOLIST, initTodoList} from '../../actions/todoList';

export default function* () {
  yield takeLatest(FETCH_TODOLIST, getTodoList);
}

export function* getTodoList() {
  const {data:{todolist:{todosId, todosEntity}}} = yield getLatestTodoList();
  yield put(initTodoList(todosId, todosEntity));
}