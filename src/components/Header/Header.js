import React, { useEffect, useState , useRef } from "react";
import { NavLink } from "react-router-dom";

// import MyImg from 'https://fv2-2.failiem.lv/thumb_show.php?i=trf6kpxe9&view';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faFacebookF , faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faHouseUser , faInfoCircle , faPaperPlane , faGlobeEurope , faSuitcase , faBars , faTimes , faChevronUp } from '@fortawesome/free-solid-svg-icons'


import {SuspenseCustom} from '../'

function LinkTag({ URL , ClassLink , IcoName }) {
  return (
    <a href={URL} target="_blank" rel="noreferrer" className={ClassLink}><FontAwesomeIcon icon={IcoName} /></a>
  )
}

const Header = () => {

  const myElement = useRef();

  const [addSideBar , setAddSideBar] = useState(true)

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const HideSide = () => {

    setTimeout(() => setAddSideBar(!addSideBar), 500);
  }

  const infoP = [
    {id:1, pageName:"Home", icoName:faHouseUser, pathPage:"/"},
    {id:2, pageName:"About", icoName:faInfoCircle, pathPage:"/about"},
    {id:3, pageName:"Portfolio", icoName:faGlobeEurope, pathPage:"/portfolio"},
    {id:4, pageName:"Skills", icoName:faSuitcase, pathPage:"/skills"},
    {id:5, pageName:"Contact", icoName:faPaperPlane, pathPage:"/contact"}
  ]

  const myImg = 'https://fv2-2.failiem.lv/thumb_show.php?i=trf6kpxe9&view'

  return (
    <SuspenseCustom>
      <header className={`header ${myElement.current === undefined ? "show" : addSideBar ? "show" : " "}`}>
        <div className="d-flex flex-column">

          <div className="profile">
            {myImg && <img src={myImg} alt="MyImg" className="img-fluid rounded-circle" />}
            <h1 className="text-light">Mohmad Gamal</h1>
            <div className="social-links mt-3 text-center">
              <LinkTag URL="https://github.com/Mohmad012" ClassLink="github" IcoName={faGithub} />
              <LinkTag URL="https://www.facebook.com/mohmad.ail.5/" ClassLink="facebook" IcoName={faFacebookF} />
              <LinkTag URL="https://www.linkedin.com/in/mohmad-gamal-196943168/" ClassLink="linkedin" IcoName={faLinkedinIn} />
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              {infoP.map(item => (
                <li key={item.id}>
                  <NavLink onClick={HideSide} exact activeClassName="active" to={item.pathPage}>
                    <FontAwesomeIcon icon={item.icoName} />
                    <span className="ico_page">{item.pageName}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <footer id="footer">
              <div className="container">
                <div className="copyright">
                  &copy; Copyright <span>Designed by <strong> Mohmad Gamal </strong></span>
                </div>
              </div>
            </footer>
          </nav>
          <button ref={myElement} onClick={() => setAddSideBar(!addSideBar)} type="button" className="mobile-nav-toggle d-xl-none"><FontAwesomeIcon icon={addSideBar ? faTimes : faBars}/></button>
          <button onClick={scrollToTop} type="button" className={`scrollToTop ${isVisible ? "show" : "hide"}`}><FontAwesomeIcon icon={faChevronUp} /></button>
        </div>
      </header>
    </SuspenseCustom>
  );
}

export default Header;

