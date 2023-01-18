import React from 'react';
import PropTypes from 'prop-types';
import { CITY_NOT_FOUND } from './../constants';
import { useSelector } from 'react-redux';

const CityInfoComponent = () => {
	const weatherData = useSelector((state) => state.weatherData);

	const notEmpty = Object.keys(weatherData).length !== 0;
	return (
		<>
			{weatherData && notEmpty && weatherData?.message !== CITY_NOT_FOUND && (
				<span>
					{weatherData.name}, {weatherData.sys.country}
				</span>
			)}
		</>
	);
};

CityInfoComponent.propTypes = {};

export default CityInfoComponent;
