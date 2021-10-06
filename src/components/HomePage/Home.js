import React, { useEffect } from "react";

import loadable from '@loadable/component'
import {SuspenseCustom} from '../'

const Typed = loadable(() => import("react-typed"));

const Home  = () => {

  useEffect(() => {
    document.title = 'Home'
  },[])

  return (
      <SuspenseCustom>
        <section id="home" className="d-flex flex-column justify-content-center align-items-center">
          <div className="home-container  text-warp" data-aos="fade-in">
            <h1>Mohmad Gamal</h1>

            <p>I'm {'  '}
              <Typed
                className="typed"
                strings={['Frontend Developer' ,'MERN Stack','ReactJS Developer', 'Freelancer' , 'Cross-functional']}
                typeSpeed={30}
                backSpeed={30}
                backDelay={800}
                loop={true}
              />
            </p>
            <a href="https://drive.google.com/file/d/1Jx1B8tw60M17xy-iRHQ2hHVqCfX6TE05/view?usp=sharing"
             target="_blank" rel="noreferrer" className="btn btn-dark">Donwload CV
            </a>
          </div>
        </section>
    </SuspenseCustom>
  );
}

export default Home;

