import { useState , useEffect } from "react";
import emailjs from 'emailjs-com';

import {handelTitle} from '../../utils';

import SuspenseCustom from '../../components/SuspenseCustom'
import MainContent from '../../components/MainContent'

import SecInfo from './SecInfo'
import SecForm from './SecForm'

const ContactContainer = () => {

    const [mainName , setMainName] = useState('');
    const [email , setEmail] = useState('');
    const [mainSubject , setMainSubject] = useState('');
    const [msg , setMsg] = useState('');
    const [reject , setReject] = useState(null);
    const [successSnd , setSuccessSnd] = useState(null);

    useEffect(() => {
        handelTitle('Contact')
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

            <SecInfo urlMap={urlMap} />

            <SecForm
                sendEmail={sendEmail}
                mainName={mainName}
                handelMainName={handelMainName}
                email={email}
                handelEmail={handelEmail}
                mainSubject={mainSubject}
                handelSubject={handelSubject}
                reject={reject}
                msg={msg}
                handelCheckMsg={handelCheckMsg}
                handelMsg={handelMsg}
                successSnd={successSnd}
            />

          </div>
      </MainContent>
    </SuspenseCustom>
  );
}

export default ContactContainer;

