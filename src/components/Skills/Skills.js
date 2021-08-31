import React, { useEffect } from 'react'

import allSkills from './data.js'
import { lazy } from '@loadable/component'

import {SuspenseCustom} from '../'
const ProgressBar = lazy(() => import("react-animated-progress-bar"));

const Skills = () => {

    useEffect(() => {
        document.title = 'Skills';
    },[])

    return(
      <SuspenseCustom>
        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title" data-aos="fade-down">
              <h2>Skills</h2>
              <p>Check out some of my skills...</p>
            </div>

            <div className="row skills-content">
              {allSkills ? allSkills.map((item) => (
                <div className="progress-bar col-lg-4 col-md-6" key={item.id} data-aos="fade-up" data-aos-delay="100">
                  <h3>{item.skill}</h3>
                  <ProgressBar
                            width="400px"
                            // height="10px"
                            fontColor="white"
                            trackWidth="10"
                            percentage={item.perc}
                            trackPathColor="#173b6c"
                            trackBorderColor="#fff"
                            hollowBackgroundColor="#173b6c"
                            defColor={{
                              fair: 'orangered',
                              good: 'yellow',
                              excellent: '#149ddd',
                              poor: 'red',
                            }}
                            
                  />
                </div>
              )) : <p>Loading......</p>}

            </div>

          </div>
        </section>
      </SuspenseCustom>
    )
};

export default Skills