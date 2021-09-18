import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

const SecLinks = ({infoP , HideSide}) => {

    return (
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
    )
}

export default SecLinks;