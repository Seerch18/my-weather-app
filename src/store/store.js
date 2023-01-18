import { legacy_createStore as createStore, combineReducers } from 'redux';
import { cityInputReducer, weatherDataReducer } from '../reducers/reducers';

const reducer = combineReducers({
	weatherData: weatherDataReducer,
	cityInput: cityInputReducer,
});

export const store = createStore(reducer);
