import React, { useEffect } from "react";
import {SuspenseCustom , MainContent} from '../'
import {myImgFull} from '../../assets/images';
import myInfo from './myInfo.js'
import ColTag from './ColTag'
import Head3 from './Head3'
import PText from './PText'


const About = () => {

	useEffect(() => {
		document.title = 'About';
	},[])

    return (
    	<SuspenseCustom>
    		<MainContent ID='about' NameClassSection='about' textP={myInfo} textH='About'>
		        <div className="row">
		          <div className="col-lg-4" data-aos="fade-right">
		            {myImgFull && <img src={myImgFull} className="img-fluid rounded" alt="My Img"/>}
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