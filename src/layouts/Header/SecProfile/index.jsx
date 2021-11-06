import { faGithub , faFacebookF , faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import LinkTag from '../LinkTag'

const SecProfile = ({myImgCircle}) => {

    return (
      <div className="profile">
        {myImgCircle && <img src={myImgCircle} alt="MyImg" className="img-fluid rounded-circle" />}
        <h1 className="text-light">Mohmad Gamal</h1>
        <div className="social-links mt-3 text-center">
          <LinkTag URL="https://github.com/Mohmad012" ClassLink="github" IcoName={faGithub} />
          <LinkTag URL="https://www.facebook.com/mohmad.ail.5/" ClassLink="facebook" IcoName={faFacebookF} />
          <LinkTag URL="https://www.linkedin.com/in/mohmad-gamal-196943168/" ClassLink="linkedin" IcoName={faLinkedinIn} />
        </div>
      </div>
    )
}

export default SecProfile;