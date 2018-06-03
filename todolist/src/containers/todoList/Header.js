import {connect} from 'react-redux';
import Header from '../../components/todoList/Header';
import {addTodo} from '../../actions/todoList';

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(Header);