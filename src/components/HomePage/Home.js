import React, { useEffect } from "react";

import loadable from '@loadable/component'
import {SuspenseCustom} from '../'



const Typed = loadable(() => import("react-typed"));
      

// const myCV_URL = "https://media-exp1.licdn.com/dms/document/C4D2DAQEdgdFyMBucWQ/profile-treasury-document-pdf-analyzed/0/1629988189208?e=1630231200&v=beta&t=p4mf9NrWd-xODXeDnarAQn82JXeynhPDJACkY_HzVzc"

const Home  = () => {

  useEffect(() => {
    document.title = 'Home'
  },[])

  const myImg = "https://fv2-3.failiem.lv/thumb_show.php?i=bcn3wuuat&view&download_checksum=4416ddf622599221c431491d419244e446c41d0c&download_timestamp=1630392303"

  return (
      <SuspenseCustom>
        {myImg && (
          <section id="home" className="d-flex flex-column justify-content-center align-items-center">
            <div className="home-container  text-warp" data-aos="fade-in">
              <h1>Mohmad Gamal</h1>

              <p>I'm {'  '}
                <Typed
                  className="typed"
                  strings={['Frontend Developer' ,'MERN Stack','ReactJS Developer', 'Freelancer' , 'Cross-functional']}
                  typeSpeed={30}
                  backSpeed={30}
                  backDelay={800}
                  loop={true}
                />
              </p>
              <a href="https://drive.google.com/file/d/1QVuravfUOp-ApX6DiKwCj2ppjo37FdW5/view"
               target="_blank" rel="noreferrer" className="btn btn-dark">Donwload CV
              </a>
            </div>
          </section>
        )}
    </SuspenseCustom>
  );
}

export default Home;

