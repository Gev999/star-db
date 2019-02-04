import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import {
  PersonList,  StarshipList, 
  PersonDetails,  StarshipDetails, PlanetPage
} from '../sw-components';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <SwapiServiceProvider value = {this.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Switch>
              <Route path="/" exact render= {()=> {
                return (
                  <React.Fragment>
                    <center>
                      <h3>Welcome to Star DB</h3>
                      <img className="welcome-img"
                        src="https://avatars.mds.yandex.net/get-pdb/879561/5ecdf1b2-7290-4d43-9d78-c03438c0d0d3/s1200?webp=false" alt="" />
                    </center>
                  </React.Fragment>
                )}
                } />

              <Route path="/people/" exact component = {PersonList} />
              <Route path="/people/:id" 
                render={({ match })=>{
                  const { id } = match.params;
                  return <PersonDetails itemId = {id} />
                }} />

              <Route path="/planets/:id?"  component = {PlanetPage} />

              <Route path="/starships/" exact component = {StarshipList} />
              <Route path="/starships/:id" 
                render={({ match })=>{
                  const { id } = match.params;
                  return <StarshipDetails itemId = {id} />
                }} />

                <Route render={()=><center><h1>Page not found</h1></center>} />
            </Switch>

          </div>
        </Router>
      </SwapiServiceProvider>

      
    );
  }
}
