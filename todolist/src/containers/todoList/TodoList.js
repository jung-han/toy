import {connect} from 'react-redux'
import TodoList from '../../components/todoList/TodoList';
import {fetchTodoList} from '../../actions/todoList';

const mapStateToProps = state => {
  return {
    isFetchTodoList: state.isFetchTodoList
  }
}

const mapDispatchToProps = {
  fetchTodoList
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);