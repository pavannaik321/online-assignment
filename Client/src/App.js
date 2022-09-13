import React from 'react';
import "./App.css"
import {Route,Routes} from 'react-router-dom'
import Footer from './component/footer/Footer';
import Game from './component/game/Game';
import Header from './component/header/Header';
import Home from './component/home/Home'
import Signup from './component/register/Signup';
import Login from './component/login/Login';
import Error from './component/error/Error';
import Quiz from './component/quiz/Quiz';


export default function App() {
	
	return (
		<div className='app'>
			
		<Header />
		<Routes>
		<Route path='*'  element={<Error />} />
		<Route path= "/" element={<Home />} />
		
		<Route path= "/game" element={<Game />} />

		<Route path= "/signup" element={<Signup />} />

		<Route path= "/login" element={<Login />} />

		<Route path='/quiz' element={<Quiz />} />

		

		</Routes>

		

		
		<Footer />
		</div>
	);
}
