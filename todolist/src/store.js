import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/todoList';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(sagas))
);

sagaMiddleware.run(sagas);
