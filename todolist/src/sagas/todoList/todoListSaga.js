import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {getLatestTodoList} from '../../service/todoList';

export default function* () {
  
}

export function* getLatestTodoList() {
  const {data} = yield call(getLatestTodoList);
  console.log(data);
  return data;
}