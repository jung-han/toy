import Main from '../../components/todoList/Main';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    todosId: state.todosId,
    todosEntity: state.todosEntity,
    showOption: state.showOption
  }
}

export default connect(mapStateToProps)(Main);
