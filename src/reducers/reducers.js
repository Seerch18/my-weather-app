/** REDUCERS */

export const weatherDataReducer = (state = {}, action) => {
	if (action.type === '@weatherData/set') {
		return action.payload;
	}
	return state;
};

export const cityInputReducer = (state = '', action) => {
	if (action.type === '@cityInput/set') {
		return action.payload;
	}
	return state;
};

/** ACTION CREATORS */

export const setWeatherData = (weatherData) => {
	return {
		type: '@weatherData/set',
		payload: weatherData,
	};
};

export const setCityInput = (cityInput) => {
	return {
		type: '@cityInput/set',
		payload: cityInput,
	};
};
