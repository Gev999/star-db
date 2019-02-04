import {withDetails, withList} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import {PersonDetail, PlanetDetail, StarshipDetail} from '../item-details';
import { withRouter } from 'react-router-dom';

const swapiService = new SwapiService();

const {
    getPerson, getPlanet, getStarship,
    getAllPeople, getAllPlanets, getAllStarships,
} = swapiService;

const PersonDetails = withDetails(getPerson, PersonDetail);
const PlanetDetails = withDetails(getPlanet, PlanetDetail);
const StarshipDetails = withDetails(getStarship, StarshipDetail);

const PersonList = withRouter(withList(getAllPeople, 'people'));
const PlanetList = withRouter(withList(getAllPlanets, 'planets'));
const StarshipList = withRouter(withList(getAllStarships, 'starships'));

export {
    PersonDetails, PlanetDetails, StarshipDetails,
    PersonList, PlanetList, StarshipList
};