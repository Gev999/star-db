import React, { Component } from 'react';

import './item-details.css';

export default class PLanetDetail extends Component {


  render() {

    const { id, name, population,
      rotationPeriod, diameter } = this.props.item;

      return (
      <div className="item-details card">
        <img className="item-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
      )
  }
}
