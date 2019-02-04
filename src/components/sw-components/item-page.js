import {withPage} from '../hoc-helpers';
import { withRouter } from 'react-router-dom';

import {
    PersonDetails, PlanetDetails, StarshipDetails,
    PersonList, PlanetList, StarshipList
  } from './item-view';

const PersonPage = withRouter(withPage(PersonList, PersonDetails));
const PlanetPage = withRouter(withPage(PlanetList, PlanetDetails));
const StarshipPage = withRouter(withPage(StarshipList, StarshipDetails));

export {PersonPage, PlanetPage, StarshipPage}