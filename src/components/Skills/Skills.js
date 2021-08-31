import React, { useEffect } from 'react'

import allSkills from './data.js'
import { lazy } from '@loadable/component'

import {SuspenseCustom , MainContent} from '../'
const ProgressBar = lazy(() => import("react-animated-progress-bar"));

const Skills = () => {

    useEffect(() => {
        document.title = 'Skills';
    },[])

    return(
      <SuspenseCustom>
        <MainContent ID='skills' NameClassSection='skills section-bg' textP='Check out some of my skills...' textH='Skills'>

            <div className="row skills-content">
              {allSkills && allSkills.map((item) => (
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
              ))}

            </div>
        </MainContent>
      </SuspenseCustom>
    )
};

export default Skills