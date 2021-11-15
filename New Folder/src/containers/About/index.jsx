import { useEffect } from "react";

import {myImgFull} from '../../utils/allImgs';
import {handelTitle} from '../../utils';
import myInfo from '../../data/data-containers/About-Info.js'

import SuspenseCustom from '../../components/SuspenseCustom'
import MainContent from '../../components/MainContent'

import SecInfo from './SecInfo'
import SecLanguage from './SecLanguage'
import SecEducation from './SecEducation'
import SecService from './SecService'

const AboutContainer = () => {

	useEffect(() => {
		handelTitle('About')
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
		            	<SecInfo />

		                <SecLanguage />

		                <SecEducation />

		                <SecService />
		            </div>
		          </div>
		        </div>
    		</MainContent>

	    </SuspenseCustom>
    )
}

export default AboutContainer;