import React, { Suspense , useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import './App.css';
import Aos from 'aos'
import 'aos/dist/aos.css';

import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { lazy } from '@loadable/component'
// import loadable from '@loadable/component'

const Header = lazy(() => import("./Header")),
	  Hero = lazy(() => import("./Hero")),
	  About = lazy(() => import("./About")),
	  Portfolio = lazy(() => import("./Portfolio"));

setInterval(() => {
	// window.location.reload()
},200)

const App = () => {

  useEffect(() => {
    Aos.init({
    	duration: 2000,
      	easing: "ease-in-out-back",
      	once: true
      })
  },[])

  return (
    
    	<Suspense fallback={
			<div className="spinner">
				<div className="circle one"></div>
				<div className="circle tow"></div>
				<div className="circle three"></div>
			</div>
    	}>
	    	<div className="App">
			    <BrowserRouter>
			    	<Header />
					<Switch>
						<Route path="/" exact component={Hero} />
						<Route path="/about" component={About} />
						<Route path="/portfolio" component={Portfolio} />
					</Switch>
			    </BrowserRouter>
		    </div>
    	</Suspense>
    
  );
}

export default App;

						
						// <Route path="/projects" component={Projects} />
						// <Route path="/skills" component={Skills} />
						// <Route path="/contact" component={Contact} />