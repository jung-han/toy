import TodoItem from '../../components/todoList/TodoItem';
import {toggleTodo, deleteTodo} from '../../actions/todoList';
import {connect} from 'react-redux';

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoItem);
