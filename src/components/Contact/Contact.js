import React, { useState , useEffect } from "react";
import emailjs from 'emailjs-com';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import {SuspenseCustom , MainContent} from '../'
import DIVInfo from './DIVInfo'
import DIVFormGroup from './DIVFormGroup'

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
      <MainContent ID='contact' NameClassSection='contact' textP='I Will See Your Message On My Email...' textH='Contact'>
          <div className="row">

            <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up-right">
              <div className="info">
                <DIVInfo ClassName='address' IcoName={faMapMarker} textH4='Location:' textP='Cairo,Egypt' />
                <DIVInfo ClassName='email' IcoName={faPaperPlane} textH4='Email:' textP='mohmadgamal1000@gmail.com' SecClass={true} />
                <DIVInfo ClassName='phone' IcoName={faPhone} textH4='Call:' textP='+201223072359' />

                <iframe src={urlMap} title="This is my location" style={{border:0, width: '100%', height: '290px'}} loading="lazy"></iframe>
              </div>

            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up-left">
              <form onSubmit={sendEmail} className="email-form">
                <div className="container">
                  <div className="form-row">
                    <DIVFormGroup ClassDiv="form-group pb-1 col-md-6" text="Your Name"
                                  nameInput="name" nameVal={mainName} funHandel={handelMainName} typeInput="text"
                                />
                    <DIVFormGroup ClassDiv="form-group pb-1 col-md-6" text="Your Email" nameInput="email"
                                  nameVal={email} funHandel={handelEmail} typeInput="email"
                                />
                  </div>
                  <DIVFormGroup ClassDiv="form-group pb-1" text="Subject" nameInput="Subject"
                                nameVal={mainSubject} funHandel={handelSubject} typeInput="text"
                              />
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
      </MainContent>
    </SuspenseCustom>
  );
}

export default Contact;

