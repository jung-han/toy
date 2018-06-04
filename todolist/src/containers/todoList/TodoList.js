import {connect} from 'react-redux'
import TodoList from '../../components/todoList/TodoList';
import {fetchTodoList} from '../../actions/todoList';

const mapDispatchToProps = {
  fetchTodoList
};

export default connect(null, mapDispatchToProps)(TodoList);