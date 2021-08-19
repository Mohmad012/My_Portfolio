import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';
import "./Hero.css";
import loadable from '@loadable/component'

const Typed = loadable(() => import("react-typed"));
      // useIntersection = loadable(() => import("./useIntersection"));

const myCV_URL = "https://media-exp1.licdn.com/dms/document/C4D2DAQHPZx_b4qt87w/profile-treasury-document-pdf-analyzed/0/1628786707425?e=1629378000&v=beta&t=2mwUN6dapj_xBSTbgV3kfdzsMlaI_q9L0a-reOTcflQ"

const Hero  = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
    document.title = 'Home'
  },[])

  useEffect(() => {

      if(document.title == 'Home'){
          document.body.style.backgroundColor = 'none';
          if(document.body.style.backgroundColor == 'none') return;
      }
      
  },[document.title])

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container  text-warp" data-aos="fade-in">
        <h1>Mohmad Gamal</h1>

        <p>I'm {'  '}
          <Typed
            className="typed"
            strings={['Frontend Developer' ,'MERN Stack','ReactJS Developer', 'Freelancer' , 'Cross-functional']}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1000}
            loop={true}
          />
        </p>
        <a href={myCV_URL} target="_blnck" className="btn btn-dark">Donwload CV</a>
      </div>
    </section>
  );
}

export default Hero;

