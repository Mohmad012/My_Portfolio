import React, { Suspense } from "react";
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { lazy } from '@loadable/component'
// import loadable from '@loadable/component'

const Header = lazy(() => import("./Header")),
	  Hero = lazy(() => import("./Hero"));

setInterval(() => {
	// window.location.reload()
},200)

const App = () => {

  return (
    
    	<Suspense fallback={
			<div className="spinner">
				<div className="circle one"></div>
				<div className="circle tow"></div>
				<div className="circle three"></div>
			</div>
    	}>
	    	<div className="App">
		    	<Header />
		    	<Hero />
		    </div>
    	</Suspense>
    
  );
}

export default App;

