import {spawn} from 'redux-saga/effects';
import todoListSaga from './todoList/todoListSaga';

export default function* root() {
  try {
    yield spawn(todoListSaga);
  } catch(e) {
    console.log('root saga error: ', e);
  }
}