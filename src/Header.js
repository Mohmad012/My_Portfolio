import React, { useEffect, useState , useRef } from "react";
// import MyImg from './circle-cropped.png';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// <header id={`${addSideBar ? 'header show' : 'header hide'}`}>
import loadable from '@loadable/component'
// const useIntersection = loadable(() => import("./useIntersection"));

  /**
   * Check if an element is in viewport
   *
   * @param {number} [offset]
   * @returns {boolean}
   */

const Header  = () => {

  const myElement = useRef();

  const [addSideBar , setAddSideBar] = useState(true)

  return (
    <header className={`header ${myElement.current === undefined ? "show" : addSideBar ? "show" : "hide"}`}>
      <div className="d-flex flex-column">

        <div className="profile">
          <img src="https://fv2-2.failiem.lv/thumb_show.php?i=trf6kpxe9&view" alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">Mohmad Gamal</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://github.com/Mohmad012" rel="noreferrer" target="_blank" className="github"><FontAwesomeIcon className="bx bxl-github" icon={faGithub} /></a>
            <a href="https://www.facebook.com/mohmad.ail.5/" rel="noreferrer" target="_blank" className="facebook"><FontAwesomeIcon className="bx bxl-facebook" icon={faFacebookF} /></a>
            <a href="https://www.linkedin.com/in/mohmad-gamal-196943168/" rel="noreferrer" target="_blank" className="linkedin"><i></i><FontAwesomeIcon className="bx bxl-linkedin" icon={faLinkedinIn}/></a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li className="active">
              <a href="#">
                <FontAwesomeIcon className="bx bx-home" icon={faHome} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon className="bx bx-user" icon={faUserSecret} style={{fontSize:'1.8rem'}} />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <FontAwesomeIcon className="bx bx-file-blank" style={{fontSize:'2rem'}} icon={faFile} />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <FontAwesomeIcon className="bx bx-book-content" icon={faIdCard} />
                
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <FontAwesomeIcon className="bx bx-server" icon={faServer} />
                
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <FontAwesomeIcon className="bx bx-envelope" icon={faEnvelope} />
                
                <span>Contact</span>
              </a>
            </li>

          </ul>
        </nav>
        <button ref={myElement} onClick={() => setAddSideBar(!addSideBar)} type="button" className="mobile-nav-toggle d-xl-none"><FontAwesomeIcon icon={addSideBar ? faTimes : faBars}/></button>

      </div>
    </header>
  );
}

export default Header;

