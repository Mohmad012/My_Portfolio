import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import './Resume.css'

const Resume = () => {

    useEffect(() => {
        Aos.init()
        document.title = 'Resume';
    },[])

    useEffect(() => {

        if(document.title == 'Resume'){
            document.body.style.backgroundColor = '#fff';
            if(document.body.style.backgroundColor == '#fff') return;
        }
        
    },[document.title])

    return(
        <section id="resume" className="resume">
          <div className="container">

            <div className="section-title" data-aos="fade-down">
              <h2>Resume</h2>
            </div>

            <div className="row">

                <div className="col-lg-6" data-aos="fade-left">
                    <h3 className="resume-title">Language</h3>
                    <div className="resume-item">
                      <h4>Arabic</h4>
                    </div>

                    <div className="resume-item">
                      <h4>English</h4>
                    </div>
                </div>

                <div className="col-lg-6" data-aos="fade-left">
                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                      <h4>Bachelor of Chemistry Science, Al-Azhar University</h4>
                      <h5>2016 - 2020</h5>
                    </div>
                </div>

                <div className="col-lg-6" data-aos="fade-left">
                    <h3 className="resume-title">Military service</h3>
                    <div className="resume-item">
                      <h4>not required</h4>
                    </div>
                </div>
            </div>

          </div>
        </section>
    )
};

export default Resume


                // <div className="col-lg-6" data-aos="fade-right">
                //     <h3 className="resume-title">Skills</h3>
                //     <div className="resume-item pb-0">
                //       <h4>Alex Smith</h4>
                //       <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                //       <ul>
                //         <li>Portland par 127,Orlando, FL</li>
                //         <li>(123) 456-7891</li>
                //         <li>alice.barkley@example.com</li>
                //       </ul>
                //     </div>
                //     <div className="resume-item pb-0">
                //       <h4>Alex Smith</h4>
                //       <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                //       <ul>
                //         <li>Portland par 127,Orlando, FL</li>
                //         <li>(123) 456-7891</li>
                //         <li>alice.barkley@example.com</li>
                //       </ul>
                //     </div>
                // </div>


              // <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
              //   <h3 className="resume-title">Professional Experience</h3>
              //   <div className="resume-item">
              //     <h4>Senior graphic design specialist</h4>
              //     <h5>2019 - Present</h5>
              //     <p><em>Experion, New York, NY </em></p>
              //     <ul>
              //       <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              //       <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
              //       <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              //       <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              //     </ul>
              //   </div>
              //   <div className="resume-item">
              //     <h4>Graphic design specialist</h4>
              //     <h5>2017 - 2018</h5>
              //     <p><em>Stepping Stone Advertising, New York, NY</em></p>
              //     <ul>
              //       <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              //       <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              //       <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              //       <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              //     </ul>
              //   </div>
              // </div>