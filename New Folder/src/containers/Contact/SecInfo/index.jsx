import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import DIVInfo from './DIVInfo'

const SecInfo = ({urlMap}) => {

    return (
        <aside className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up-right">
          <div className="info">
            <DIVInfo ClassName='address' IcoName={faMapMarker} textH4='Location:' textP='Cairo,Egypt' />
            <DIVInfo ClassName='email' IcoName={faPaperPlane} textH4='Email:' textP='mohmadgamal1000@gmail.com' SecClass={true} />
            <DIVInfo ClassName='phone' IcoName={faPhone} textH4='Call:' textP='+201223072359' />

            <iframe src={urlMap} title="This is my location" style={{border:0, width: '100%', height: '290px'}} loading="lazy"></iframe>
          </div>

        </aside>
    )
}

export default SecInfo;