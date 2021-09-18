import { useEffect } from 'react'

import {handelTitle , FilterProject} from '../../utils';

import allData from '../../data/data-containers/data-Portfolio.js'

import SuspenseCustom from '../../components/SuspenseCustom'
import MainContent from '../../components/MainContent'

import ListTag from './ListTag'
import LinkTag from './LinkTag'


const PortfolioContainer = () => {

    useEffect(() => {
        handelTitle('Portfolio')
    },[])

    useEffect(() => {
      FilterProject()
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

            <div className="row portfolio-container" data-aos="fade-up">
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

export default PortfolioContainer