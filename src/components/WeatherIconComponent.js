import React from 'react';
import PropTypes from 'prop-types';
import {
	WiDaySunny,
	WiCloudy,
	WiSnow,
	WiRain,
	WiDayRain,
} from 'react-icons/wi';

const weatherIcon = {
	Clouds: WiCloudy,
	Clear: WiDaySunny,
	Snow: WiSnow,
	Rain: WiRain,
	Drizzle: WiDayRain,
};

const WeatherIconComponent = ({ weather }) => {
	let WeatherIcon = <></>;
	if (weather) {
		WeatherIcon = weatherIcon[weather[0]?.main];
	}
	return (
		<>
			{weather && (
				<div>
					<WeatherIcon className='weather-icon'></WeatherIcon>
				</div>
			)}
		</>
	);
};

WeatherIconComponent.propTypes = {
	weather: PropTypes.array,
};

export default WeatherIconComponent;
