import React, { useState , useEffect } from "react";
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import SuspenseCustom from '../SuspenseCustom'

const Contact = () => {

    const [mainName , setMainName] = useState('');
    const [email , setEmail] = useState('');
    const [mainSubject , setMainSubject] = useState('');
    const [msg , setMsg] = useState('');
    const [reject , setReject] = useState(null);
    const [successSnd , setSuccessSnd] = useState(null);

    useEffect(() => {
        document.title = 'Contact';
    },[])

    const handelMainName = (e) => {
      setMainName(e.target.value)
    }

    const handelEmail = (e) => {
      setEmail(e.target.value)
    }

    const handelSubject = (e) => {
      setMainSubject(e.target.value)
    }

    const handelMsg = (e) =>{
      setMsg(e.target.value)
    }

    const clearFeilds = () => {
      setMainName("")
      setEmail("")
      setMainSubject("")
      setMsg("")
    }



    const sendEmail = (e) => {
      e.preventDefault();

      if(!reject){
        emailjs.sendForm('service_tz0l27s', 'template_5p4fv0a', e.target, 'user_98Zb9q5gn95pgq2PmRTRT')
          .then((result) => {
            console.log(result.text);
            setSuccessSnd(true)
            clearFeilds()
            handelSuccessSnd()
            setReject(null)
          }, (error) => {
            console.log(error.text);
          });

      }
    }


    const handelCheckMsg = () =>{
      msg.length < 5 ? setReject(true) : setReject(false)
    }

    const handelSuccessSnd = () => {

      setTimeout(function(){ setSuccessSnd(false) }, 3000);
    }

    const urlMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389530721!2d31.188423461724398!3d30.059618470484782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sbg!4v1628906740233!5m2!1sen!2sbg"

  return (
    <SuspenseCustom>
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title" data-aos="fade-down">
            <h2>Contact</h2>
            <p>I Will See Your Message On My Email...</p>
          </div>

          <div className="row">

            <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up-right">
              <div className="info">
                <div className="address">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <h4>Location:</h4>
                  <p>Cairo,Egypt</p>
                </div>

                <div className="email">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <h4>Email:</h4>
                  <p className="text-truncate" style={{maxWidth: 'calc(100% - 20px)'}}>mohmadgamal1000@gmail.com</p>
                </div>

                <div className="phone">
                  <FontAwesomeIcon icon={faPhone} />
                  <h4>Call:</h4>
                  <p>+201223072359</p>
                </div>

                <iframe src={urlMap} title="This is my location" frameborder="0" style={{border:0, width: '100%', height: '290px'}} allowfullscreen="" loading="lazy"></iframe>
              </div>

            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up-left">
              <form onSubmit={sendEmail} className="email-form">
                <div className="container">
                  <div className="form-row">
                    <div className="form-group pb-1 col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" value={mainName} onChange={handelMainName} data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group pb-1 col-md-6">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" value={email} onChange={handelEmail} data-rule="email" data-msg="Please enter a valid email" required />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group pb-1">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" name="Subject" id="subject" value={mainSubject} onChange={handelSubject} data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group pb-1">
                    <label htmlFor="message">Message</label>
                    <textarea className={`form-control ${reject ? "is-invalid" : reject == null ? "" : "is-valid"}`} name="message" id="message" rows="10" data-rule="required" value={msg} onBlur={handelCheckMsg} onChange={handelMsg} data-msg="Please write something for us" required></textarea>
                    {reject && (
                          <div className="invalid-feedback">
                            {reject && "Sorry Message Should Be More Than 5 Character!!"}
                          </div>
                    )}
                  </div>
                  <div className="text-center btn_snd mt-5"><button className="btn btn-primary" type="submit">Send Message</button></div>
                </div>
              </form>
              <div className={`success-snd ${successSnd ? "show" : !successSnd ? "hide" : " "} `}>
                <h3>Your message was successfully sent!!!</h3>
              </div>
            </div>

          </div>

        </div>
      </section>
    </SuspenseCustom>
  );
}

export default Contact;

