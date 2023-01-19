import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { getCityWeather } from '../services/WeatherService';
import { useDispatch, useSelector } from 'react-redux';
import { setCityInput, setWeatherData } from '../reducers/reducers';

const SearchComponent = () => {
	const cityInput = useSelector((state) => state.cityInput);
	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (cityInput) {
			getCityWeather(cityInput).then((res) => dispatch(setWeatherData(res)));
		}
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div className='search-box'>
					<BsSearch></BsSearch>
					<input
						type={'text'}
						placeholder='Search City Temperature'
						name='city'
						value={cityInput}
						onChange={(ev) => {
							dispatch(setCityInput(ev.target.value));
						}}
					/>
				</div>
			</form>
		</div>
	);
};

SearchComponent.propTypes = {};

export default SearchComponent;
