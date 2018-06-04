import React, { Component } from 'react';
import _ from 'lodash';
import Header from '../../containers/todoList/Header'
import Main from '../../containers/todoList/Main';
import Footer from '../../containers/todoList/Footer';
import dotProp from 'dot-prop-immutable';
import {Link} from 'react-router-dom';

export default class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodoList();
  }
  render() {
    return (
      <div>
        <div className="todoapp">
          <Header />
          <Main />
          <Footer />
        </div> 
        <Link to='/completedList'>completedList</Link>
      </div>
    )
  }
};
