import React, { useEffect , useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';
import myImg from "./mohmad111.png"
import './About.css';

function About(props) {

	const [iconList , setIconList] = useState(false)

	useEffect(() => {
		Aos.init({ duration: 2000})
		document.title = 'About';
	},[])

	useEffect(() => {

		if(document.title == 'About'){
			document.body.style.backgroundColor = '#f5f8fd';
			if(document.body.style.backgroundColor == '#f5f8fd') return;
		}
		
	},[document.title])

    return (
	    <section id="about" className="about">
	      <div className="container">

	        <div className="section-title" data-aos="fade-down">
	          	<h2>About</h2>
	          	<p className="font-italic">
					I'm a Creative Frontend Developer with <strong> 3+ years </strong> hands of experience in building <strong>responsive websites. </strong>
					contributing to all phases of <strong> SDLC </strong> from conception to maintenance by acting as analyst, architect to
					<strong> finished of 10+ projects </strong> and you can check links for it in projects section at the bottom. Cross-
					functional <strong> Scrum agile member. </strong> Passionate about <strong> clean code </strong> and <strong> get things done. </strong> Maintains up to
					date awareness of technological trends and technological advances.
				</p>
	        </div>

	        <div className="row">
	          <div className="col-lg-4" data-aos="fade-right">
	            <img src={myImg} className="img-fluid rounded" alt=""/>
	          </div>
	          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
	            <h3>Frontend Developer &amp; Software Engineer.</h3>
	            <div className="row">
	              <div className="col-lg-6">
	                <ul>
	                  <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong><span> 14/07/1997</span></li>
	                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong><span> +201223072359</span></li>
	                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong><span> Cairo , Egypt</span></li>
	                </ul>
	              </div>
	              <div className="col-lg-6">
	                <ul>
	                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong><span> mohmadgamal1000@gmail.com</span></li>
	                  <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong><span> Available</span></li>
	                  <li><i className="icofont-rounded-right"></i> <strong>Full Time Job:</strong><span> Available</span></li>
	                </ul>
	              </div>
	            </div>
	          </div>
	        </div>

	      </div>
	    </section>
    )
}

export default About;