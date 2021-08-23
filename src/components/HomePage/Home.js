import React, { useEffect } from "react";

import loadable from '@loadable/component'
import SuspenseCustom from '../SuspenseCustom'

const Typed = loadable(() => import("react-typed"));
      

const myCV_URL = "https://media-exp1.licdn.com/dms/document/C4D2DAQHVuCo7WRVMZg/profile-treasury-document-pdf-analyzed/0/1629733739878?e=1629820800&v=beta&t=BADkMhXpYwEYNA06kWX-qw0me5qaE_2bsrOEYlbPMZE"

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

