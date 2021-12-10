import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';
import "./style.css"
import { Typewriter } from 'react-simple-typewriter';

import resumePdf from '../../assets/resume/codingResume.pdf';


function ContactForm() {
  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log('Submit Form', formState);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //     console.log('Handle Form', formState);
  //   }
  // };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  }

  return (
    <div className="row justify-content-center">
      <div className="row col-lg-12 col-xxl-11 justify-content-center">

        <div className="col-12 row justify-content-center">
            <div className="col-10">
              <h1 className="portfolio-name text-center text-lg-start my-3 pb-md-3 pb-0 pb-lg-0 page-header">
              <Typewriter
                words={['Hire me!']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={1000}
                onLoopDone={handleDone}
                // onType={handleType}
              />
              </h1>
            </div>
        </div>

        <div className="col-12 row justify-content-center mt-lg-5">
          
          <div className="col-lg-3 col-md-6 col-12 align-self-center text-center justify-content-center row mb-4">
            <div className="col-12 rounded-circle row justify-content-center align-content-center">

              <div className="img-container bg-white border border-dark d-flex justify-content-center align-items-center rounded-circle">
                <img
                  src={require(`../../assets/logos/linkedin.png`)} className="img-width" alt="Linkedin logo"
                />
              </div>
                {/* <h6 className="body-text mt-2">LinkedIn</h6> */}
                <h6 className="body-text mt-2">
                  <a href="https://www.linkedin.com/in/ronan-galvez-08aaa81a8" target="_blank" rel="noopener noreferrer" className="contactLink">
                    LinkedIn
                  </a>
                </h6>

            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 align-self-center text-center justify-content-center row mb-4">
            <div className="col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container bg-white border border-dark d-flex justify-content-center align-items-center rounded-circle">
                <img
                  src={require(`../../assets/logos/email.png`)} className="img-width" alt="Linkedin logo"
                />
              </div>
                <h6 className="body-text mt-2">
                  <a href="https://github.com/Ronan-Codes" target="_blank" rel="noopener noreferrer" className="contactLink">
                    GitHub
                  </a>
                </h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 align-self-center text-center justify-content-center row mb-4">
            <div className="col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container bg-white border border-dark d-flex justify-content-center align-items-center rounded-circle">
                <img
                  src={require(`../../assets/logos/email.png`)} className="img-width" alt="Linkedin logo"
                />
              </div>
                <h6 className="body-text mt-2">
                  <a href="mailto:galv.ronan@gmail.com" className="contactLink">
                    ronancodes.gmail.com
                  </a>
                </h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 align-self-center text-center justify-content-center row mb-4">
            <div className="col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container bg-white border border-dark d-flex justify-content-center align-items-center rounded-circle">
                <img
                  src={require(`../../assets/logos/phone.png`)} className="img-width" alt="Linkedin logo"
                />
              </div>
                <h6 className="body-text mt-2">
                  <a href="tel:+1-352-328-7698" className="contactLink">
                    +1-352-328-7698
                  </a>
                </h6>
                {/* <a id="resume" className="" href = {resumePdf} target="_blank">Resume</a> */}
            </div>
          </div>

          {/* <div className="col-3 align-self-center text-center justify-content-center row">
            <div className="col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container bg-white border border-dark d-flex justify-content-center align-items-center rounded-circle">
                <img
                  src={require(`../../assets/logos/github-solid-gray.png`)} className="img-width" alt="Linkedin logo"
                />
                </div>
                <p>GitHub</p>
            </div>
          </div> */}
        
        </div>

      </div>
    </div>
  );
}

export default ContactForm;
