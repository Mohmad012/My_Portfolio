import React, { useEffect } from 'react'

import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
import 'isotope-cells-by-row';

import allData from './data.js'
import {SuspenseCustom , MainContent} from '../'

function ListTag({ text , filterMode , NameClass }) {
  return (
    <>
      <li data-filter={filterMode} className={NameClass}>{text}</li>
    </>
  )
}

function LinkTag({ URL , NameURL }) {
  return (
    <>
      <a target="_blnck" href={URL}>{NameURL}</a>
    </>
  )
}

const Portfolio = () => {

    useEffect(() => {
        document.title = 'Portfolio';
    },[])

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
      <SuspenseCustom>
        <MainContent ID='portfolio' NameClassSection='portfolio section-bg' textP='Check out some of my projects...' textH='Portfolio'>

            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <ListTag text='All' filterMode='*' NameClass='filter-active' />
                  <ListTag text='App' filterMode='.filter-app' NameClass='' />
                  <ListTag text='Card' filterMode='.filter-card' NameClass='' />
                  <ListTag text='Web' filterMode='.filter-web' NameClass='' />
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="10">
              {allData && allData.map((item , i) => (

                <div key={i} className={`col-lg-4 col-md-6 portfolio-item ${item.filterMode}`}>
                  <div className="portfolio-wrap">
                    {item.img && <img src={item.img} className="img-fluid rounded" alt={item.name} />}
                    <span className="name_project font-weight-bold">{item.name}</span>
                    <div className="portfolio-links">
                      <LinkTag URL={item.linkLive} NameURL='Live' />
                      {item.frontBack && (
                        <>
                          <LinkTag URL={item.frontGithub} NameURL='Front' />
                          <LinkTag URL={item.backGithub} NameURL='Back' />
                        </>
                      )}
                      
                      {!item.frontBack && (
                        <>
                          <LinkTag URL={item.linkGithub} NameURL='Github' />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            </div>
            
        </MainContent>
      </SuspenseCustom>
    )
};

export default Portfolio