import {connect} from 'react-redux';
import RemovedItemList from '../../components/removedItemList/RemovedItemList';

const mapStateToProps = state => {
  return {
    removedIdList: state.removedId,
    removedEntity: state.removedEntity
  };
};

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(RemovedItemList);