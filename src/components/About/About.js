import React, { useEffect } from "react";
import {SuspenseCustom , MainContent} from '../'


function ColTag({ textstrong1 , textstrong2 , textstrong3 , textspan4 , textspan5 , textspan6 }) {
  return (
	  <div className="col-lg-6">
	    <ul>
	      <li><strong> {textstrong1}</strong><span> {textspan4}</span></li>
	      <li><strong> {textstrong2}</strong><span> {textspan5}</span></li>
	      <li><strong> {textstrong3}</strong><span> {textspan6}</span></li>
	    </ul>
	  </div>
  )
}

function Head3({ title }) {
  return (
	  <h3>{title}</h3>
  )
}

function PText({ text }) {
  return (
	  <p>{text}</p>
  )
}

const About = () => {

	useEffect(() => {
		document.title = 'About';
	},[])

	const myImg = "https://files.fm/thumb_show.php?i=yeu3e748s&view"

	let myInfo =`	I'm a Creative Frontend Developer with <strong> 3+ years </strong> hands of experience in building <strong>responsive websites. </strong>
					contributing to all phases of <strong> SDLC </strong> from conception to maintenance by acting as analyst, architect to
					<strong> finished of 10+ projects </strong> and you can check links for it in projects section at the bottom. Cross-
					functional <strong> Scrum agile member. </strong> Passionate about <strong> clean code </strong> and <strong> get things done. </strong> Maintains up to
					date awareness of technological trends and technological advances.
				`

    return (
    	<SuspenseCustom>
    		<MainContent ID='about' NameClassSection='about' textP={myInfo} textH='About'>
		        <div className="row">
		          <div className="col-lg-4" data-aos="fade-right">
		            {myImg && <img src={myImg} className="img-fluid rounded" alt="My Img"/>}
		          </div>
		          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
		            <h3>Frontend Developer &amp; Software Engineer.</h3>
		            <div className="row">
		            	<ColTag textstrong1='Birthday:' textstrong2='Phone:' textstrong3='City:'
		            			textspan4='14/07/1997' textspan5='+201223072359' textspan6='Cairo , Egypt'
		            		/>
		            	<ColTag textstrong1='Email:' textstrong2='Freelance:' textstrong3='Full Time Job:'
		            			textspan4='mohmadgamal1000@gmail.com' textspan5='Available' textspan6='Available'
		            		/>

	                <div className="col-lg-6" data-aos="fade-up-right">
	                    <Head3 title='Language' />
	                    <div>
	                    	<PText text="Arabic" />
	                    </div>

	                    <div>
	                      <PText text="English" />
	                    </div>
	                </div>

	                <div className="col-lg-6 mb-4" data-aos="fade-up-left">
	                    <Head3 title='Education' />
	                    <div>
	                    	<PText text="Bachelor of Science, Al-Azhar University" />
	                    	<PText text="2016 - 2020" />
	                    </div>
	                </div>

	                <div className="col-lg-6" data-aos="fade-up">
	                    <Head3 title='Military service' />
	                    <div>
	                      <strong>Not Required</strong>
	                    </div>
	                </div>
		            </div>
		          </div>
		        </div>
    		</MainContent>

	    </SuspenseCustom>
    )
}

export default About;