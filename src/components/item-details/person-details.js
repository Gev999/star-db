import React, { Component } from 'react';

import './item-details.css';

export default class PersonDetail extends Component {


  render() {

    const { id, name, gender,
      birthYear, eyeColor } = this.props.item;

      return (
        <div className="item-details card">
          <img className="item-image"
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="character"/>

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>{eyeColor}</span>
              </li>
            </ul>
          </div>
        </div>
      )
  }
}
