import React, { useEffect } from "react";

import loadable from '@loadable/component'
import SuspenseCustom from '../SuspenseCustom'

const Typed = loadable(() => import("react-typed"));
      

const myCV_URL = "https://media-exp1.licdn.com/dms/document/C4D2DAQEdgdFyMBucWQ/profile-treasury-document-pdf-analyzed/0/1629988189208?e=1630076400&v=beta&t=dDOjmEbawLMf8TFvd_zVegek1eZR-Ot3o_m8AFBpbw0"

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
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                loop={true}
              />
            </p>
            <a href={myCV_URL} target="_blnck" className="btn btn-dark">Donwload CV</a>
          </div>
        </section>
    </SuspenseCustom>
  );
}

export default Home;

