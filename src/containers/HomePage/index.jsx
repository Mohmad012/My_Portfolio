import { useEffect } from "react";

import SuspenseCustom from '../../components/SuspenseCustom'

import {handelTitle} from '../../utils';

import loadable from '@loadable/component'
const Typed = loadable(() => import("react-typed"));

const HomeContainer  = () => {

  useEffect(() => {
    handelTitle('Home')
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
            <a href="https://drive.google.com/file/d/1mHjPPCdYGeu7fizpZ72fQqM1oxXObkHr/view?usp=sharing"
             target="_blank" rel="noopener noreferrer" className="btn btn-dark">Donwload CV
            </a>
          </div>
        </section>
    </SuspenseCustom>
  );
}

export default HomeContainer;

