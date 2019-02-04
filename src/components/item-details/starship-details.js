import React, { Component } from 'react';

import './item-details.css';

export default class StarshipDetail extends Component {


  render() {

    const { id, name, model,
        manufacturer, passengers, cargoCapacity } = this.props.item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model</span>
              <span>{model}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Passengers</span>
              <span>{passengers}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Manufacturer</span>
              <span>{manufacturer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Cargo Capacity</span>
              <span>{cargoCapacity}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
