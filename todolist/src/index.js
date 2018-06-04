import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './containers/todoList/TodoList';
import RemovedItemList from './containers/removedItemList/RemovedItemList';
import './styles/index.css';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/todoList" component={TodoList} />
        <Route path="/removedItemList" component={RemovedItemList} />
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
