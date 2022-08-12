import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Navigate } from 'react-router-dom';

import GamePage from './features/pages/games_page';
import MlbData from './features/mlb/get_data';
import Teams from './features/pages/teams';

import Menu from './features/components/menu';

import './App.css';

function App() {
	return (
		<div className="App">
		<header className="App-header">
			<Router>
				<Menu />
				<Routes>
					<Route exact path="/" element={<GamePage />} />
					<Route path="/teams" element={<Teams />} />
				</Routes>
			</Router>
			{/* <MlbData /> */}
		</header>
		</div>
	);
}

export default App;
