import {connect} from 'react-redux';
import Footer from '../../components/todoList/Footer';
import {
  changeShowOption,
  clearCompletedTodos
} from '../../actions/todoList';

const mapStateToProps = state => {
  return {
    todosEntity: state.todosEntity,
    showOption: state.showOption
  };
}

const mapDispatchToProps = {
  changeShowOption,
  clearCompletedTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
