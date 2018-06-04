import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducers from './reducers/todoList';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const initialState = {
  todosId: [],
  todosEntity: {},
  showOption: 'All',
  removedId: [],
  removedEntity: {},
  isFetchTodoList: false
}

export const store = createStore(
  reducers, 
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(sagas);
