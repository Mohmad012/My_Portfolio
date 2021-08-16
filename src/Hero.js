import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';
import "./Hero.css";
import loadable from '@loadable/component'

const Typed = loadable(() => import("react-typed"));
      // useIntersection = loadable(() => import("./useIntersection"));



const Hero  = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
  },[])

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
      </div>
    </section>
  );
}

export default Hero;

