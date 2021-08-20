import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
import 'isotope-cells-by-row';
import allData from './data.js'

const Portfolio = () => {

    const [loopData , setLoopData] = useState('')

    useEffect(() => {
        document.title = 'Portfolio';
        if(document.title === 'Portfolio'){
            document.body.style.backgroundColor = '#f5f8fd';
            if(document.body.style.backgroundColor === '#f5f8fd') return;
        }
        
    },[document.title])

    useEffect(() => {
      jQueryBridget( 'isotope', Isotope, $ );

      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
    },[])


    return(
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">

          <div className="section-title"  data-aos="fade-down">
            <h2>Portfolio</h2>
            <p>Check out some of my projects...</p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="10">
            {allData ? allData.map((item , i) => (

              <div key={i} className={`col-lg-4 col-md-6 portfolio-item ${item.filterMode}`}>
                <div className="portfolio-wrap">
                  <img src={item.img} className="img-fluid rounded" alt={item.name} />
                  <span className="name_project font-weight-bold">{item.name}</span>
                  <div className="portfolio-links">
                    <a target="_blnck" href={item.linkLive}>Live</a>
                    {item.frontBack && (
                      <>
                        <a target="_blnck" href={item.frontGithub}>Front</a>
                        <a target="_blnck" href={item.backGithub}>Back</a>
                      </>
                    )}
                    
                    {!item.frontBack && (
                      <>
                        <a target="_blnck" href={item.linkGithub}>Github</a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )) : <p>Loading...</p>}

          </div>

        </div>
      </section>
    )
};

export default Portfolio