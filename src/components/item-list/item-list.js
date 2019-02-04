import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './item-list.css';


export default class ItemList extends Component {

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() =>this.props.history.push(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const items = this.renderItems(this.props.itemList);
    const title = this.props.title.toUpperCase();

    return (
      <React.Fragment>
        <h3 className="item-list-title">{title}</h3>
        <ul className="item-list list-group">
          {items}
        </ul>
      </React.Fragment>
    );
  }
}

ItemList.defaultProps = {
    onItemSelected: ()=>{}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  itemList: PropTypes.arrayOf(PropTypes.object),
}
