import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'

import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/index.scss';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './layouts/Header'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const App = () => {

  useEffect(() => {
    Aos.init({
    	duration: 2000,
      	easing: "ease-in-out-back",
      	once: true
      })
  },[])

  return (
    
    	<main className="App">
	    	<Header />
  			<Switch>
  				<Route path="/" exact component={HomePage} />
  				<Route path="/about" component={About} />
  				<Route path="/portfolio" component={Portfolio} />
  				<Route path="/skills" component={Skills} />
  				<Route path="/contact" component={Contact} />
  			</Switch>
	    </main>
    	
    
  );
}

export default App;