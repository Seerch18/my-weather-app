import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchComponent from '../components/SearchComponent';
import WeatherComponent from '../components/WeatherComponent';
import CityInfoComponent from '../components/CityInfoComponent';
import { CITY_NOT_FOUND } from './../constants';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData } from '../reducers/reducers';

const WeatherPage = () => {
	const weatherData = useSelector((state) => state.weatherData);
	const cityInput = useSelector((state) => state.cityInput);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!cityInput) {
			dispatch(setWeatherData({}));
		}
	}, [cityInput]);

	return (
		<div className='weather-page-box'>
			<SearchComponent></SearchComponent>
			{cityInput && (
				<>
					{weatherData?.message !== CITY_NOT_FOUND ? (
						<>
							<WeatherComponent></WeatherComponent>
							<CityInfoComponent></CityInfoComponent>
						</>
					) : (
						<span>{weatherData?.message}</span>
					)}
				</>
			)}
		</div>
	);
};

WeatherPage.propTypes = {};

export default WeatherPage;
