import { useEffect, useState , useRef } from "react";

import SecProfile from './SecProfile'
import SecLinks from './SecLinks'
import SecFooter from './SecFooter'
import SecBtns from './SecBtns'

import {myImgCircle} from '../../utils/allImgs';
import {scrollToTop} from '../../utils'

import infoP from '../../data/data-components/data-Header.js'


import SuspenseCustom from '../../components/SuspenseCustom'

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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const HideSide = () => {

    setTimeout(() => setAddSideBar(!addSideBar), 500);
  }

  // const myImg = 'https://fv2-2.failiem.lv/thumb_show.php?i=trf6kpxe9&view'

  return (
    <SuspenseCustom>
      <header className={`header ${myElement.current === undefined ? "show" : addSideBar ? "show" : " "}`}>
        <aside className="d-flex flex-column">

          <SecProfile myImgCircle={myImgCircle} />

          <nav className="nav-menu">
            <SecLinks infoP={infoP} HideSide={HideSide} />
            <SecFooter />
          </nav>
          <SecBtns
            myElement={myElement}
            setAddSideBar={setAddSideBar}
            addSideBar={addSideBar}
            scrollToTop={scrollToTop}
            isVisible={isVisible}
          />
        </aside>
      </header>
    </SuspenseCustom>
  );
}

export default Header;

