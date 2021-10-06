import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'

import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/styles/index.scss';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Home , Header , About , Portfolio , Skills , Contact} from '../'

const App = () => {

  useEffect(() => {
    Aos.init({
    	duration: 2000,
      	easing: "ease-in-out-back",
      	once: true
      })
  },[])

  return (
    
    	<div className="App">
	    	<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/skills" component={Skills} />
				<Route path="/contact" component={Contact} />
			</Switch>
	    </div>
    	
    
  );
}

export default App;