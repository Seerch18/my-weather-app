import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';

import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<WeatherPage></WeatherPage>} />
				<Route path='*' element={<WeatherPage></WeatherPage>} />
			</Routes>
		</Router>
	);
}

export default App;
