import {combineReducers} from 'redux';
import teamReducer from './teamReducer';


export default combineReducers({
    //aqui se escribe el stado global
    pokemonTeam: teamReducer// lo que devuelva el reducer de teamreducer
});