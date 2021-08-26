import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'

import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/index.scss';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import loadable , { lazy } from '@loadable/component'

import SuspenseCustom from '../SuspenseCustom'

const Home = loadable(() => import("../HomePage/Home"));

const Header = lazy(() => import("../Header/Header")),
	  About = loadable(() => import("../About/About")),
	  Portfolio = loadable(() => import("../Portfolio/Portfolio")),
	  Skills = loadable(() => import("../Skills/Skills")),
	  Contact = loadable(() => import("../Contact/Contact"));


const App = () => {

  useEffect(() => {
    Aos.init({
    	duration: 2000,
      	easing: "ease-in-out-back",
      	once: true
      })
  },[])

  return (
    
  		<SuspenseCustom>
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
    	</SuspenseCustom>
    
  );
}

export default App;