import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes, faChevronUp} from '@fortawesome/free-solid-svg-icons'

const SecBtns = ({
	myElement,
	setAddSideBar,
	addSideBar,
	scrollToTop,
	isVisible
}) => {

    return (
    	<>
          <button ref={myElement} onClick={() => setAddSideBar(!addSideBar)} type="button" className="mobile-nav-toggle d-xl-none"><FontAwesomeIcon icon={addSideBar ? faTimes : faBars}/></button>
          <button onClick={scrollToTop} type="button" className={`scrollToTop ${isVisible ? "show" : "hide"}`}><FontAwesomeIcon icon={faChevronUp} /></button>
        </>
    )
}

export default SecBtns;