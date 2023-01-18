import { API_URL } from '../api/urls'; // params: p={City Name}&appid={Api Key}

export const getCityWeather = async (cityName) => {
	try {
		return await fetch(
			`${API_URL}q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
		).then((res) => res.json());
	} catch (error) {
		console.log(error);
	}
};
