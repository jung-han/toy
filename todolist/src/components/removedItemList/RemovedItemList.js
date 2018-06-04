import React, { Component } from 'react';
import RemovedItem from '../../containers/removedItemList/RemovedItem';
import {Link} from 'react-router-dom';
import _ from 'lodash';

export default class RemovedItemList extends Component {
  render() {
    const {removedIdList, removedEntity} = this.props;
    return (
      <div className='completedDiv'>
        <h2>삭제 목록</h2>
        <ul className="todo-list">
          {
            _.map(removedIdList, (id, idx) => {
              return <RemovedItem key={`completed_${idx}`} id={id} entity={removedEntity[id]} />;
            })
          }
        </ul>
        <Link to='/todoList'>todoList >> </Link>
      </div>
    )
  }
};
