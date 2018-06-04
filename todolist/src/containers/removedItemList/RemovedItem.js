import {connect} from 'react-redux';
import RemovedItem from '../../components/removedItemList/RemovedItem';
import {bringBackTodo} from '../../actions/todoList';

const mapStateToProps = state => {
};
const mapDispatchToProps = {
  bringBackTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(RemovedItem);
