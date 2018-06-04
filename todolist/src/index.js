import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './containers/todoList/TodoList';
import './styles/index.css';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/todoList" component={TodoList} />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
