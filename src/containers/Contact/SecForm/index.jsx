import DIVFormGroup from './DIVFormGroup'

const SecForm = (
	{
		sendEmail,
		mainName,
		handelMainName,
		email,
		handelEmail,
		mainSubject,
		handelSubject,
		reject,
    msg,
    handelCheckMsg,
    handelMsg,
		successSnd
	}) => {

    return (
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up-left">
          <form onSubmit={sendEmail} className="email-form">
            <div className="container">
              <div className="form-row">
                <DIVFormGroup
                		ClassDiv="form-group pb-1 col-md-6"
                		text="Your Name"
                        nameInput="name"
                        nameVal={mainName}
                        funHandel={handelMainName}
                        typeInput="text"
                />
                <DIVFormGroup 
                		ClassDiv="form-group pb-1 col-md-6"
                		text="Your Email"
                		nameInput="email"
                        nameVal={email}
                        funHandel={handelEmail}
                        typeInput="email"
                />
              </div>
              <DIVFormGroup 
              			ClassDiv="form-group pb-1"
              			text="Subject"
              			nameInput="Subject"
                        nameVal={mainSubject}
                        funHandel={handelSubject}
                        typeInput="text"
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
    )
}

export default SecForm;