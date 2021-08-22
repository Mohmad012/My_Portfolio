import React, { useEffect } from "react";
import SuspenseCustom from '../SuspenseCustom'


const About = () => {

	useEffect(() => {
		document.title = 'About';
	},[])


    return (
    	<SuspenseCustom>
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
		            <img src="https://files.fm/thumb_show.php?i=yeu3e748s&view" className="img-fluid rounded" alt=""/>
		          </div>
		          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
		            <h3>Frontend Developer &amp; Software Engineer.</h3>
		            <div className="row">

		              <div className="col-lg-6">
		                <ul>
		                  <li><strong>Birthday:</strong><span> 14/07/1997</span></li>
		                  <li><strong>Phone:</strong><span> +201223072359</span></li>
		                  <li><strong>City:</strong><span> Cairo , Egypt</span></li>
		                </ul>
		              </div>

		              <div className="col-lg-6">
		                <ul>
		                  <li><strong>Email:</strong><span> mohmadgamal1000@gmail.com</span></li>
		                  <li><strong>Freelance:</strong><span> Available</span></li>
		                  <li><strong>Full Time Job:</strong><span> Available</span></li>
		                </ul>
		              </div>

	                <div className="col-lg-6" data-aos="fade-up-right">
	                    <h3>Language</h3>
	                    <div>
	                      <p>Arabic</p>
	                    </div>

	                    <div>
	                      <p>English</p>
	                    </div>
	                </div>

	                <div className="col-lg-6 mb-4" data-aos="fade-up-left">
	                    <h3>Education</h3>
	                    <div>
	                      <p>Bachelor of Chemistry Science, Al-Azhar University</p>
	                      <p>2016 - 2020</p>
	                    </div>
	                </div>

	                <div className="col-lg-6" data-aos="fade-up">
	                    <h3>Military service</h3>
	                    <div>
	                      <strong>Not Required</strong>
	                    </div>
	                </div>
		            </div>
		          </div>
		        </div>

		      </div>
		    </section>
	    </SuspenseCustom>
    )
}

export default About;