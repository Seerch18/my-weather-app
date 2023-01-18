import React from 'react';
import PropTypes from 'prop-types';
import WeatherIconComponent from './WeatherIconComponent';
import { CITY_NOT_FOUND } from './../constants';
import { convertUnitsTemp } from '../utils';
import { useSelector } from 'react-redux';

const WeatherComponent = () => {
	const weatherData = useSelector((state) => state.weatherData);

	const notEmpty = Object.keys(weatherData).length !== 0;
	return (
		<>
			{weatherData && notEmpty && weatherData?.message !== CITY_NOT_FOUND && (
				<div className='weather-box'>
					<WeatherIconComponent
						weather={weatherData.weather}
					></WeatherIconComponent>
					<h3>{convertUnitsTemp(weatherData.main.temp, 'K', 'C', 2)}º</h3>
				</div>
			)}
		</>
	);
};

WeatherComponent.propTypes = {};

export default WeatherComponent;
