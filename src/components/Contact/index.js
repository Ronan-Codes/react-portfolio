import React from 'react';
import "./style.css"
import { Typewriter } from 'react-simple-typewriter';

function ContactForm() {
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
            <div className="jm-logo2 col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container  d-flex justify-content-center align-items-center rounded-circle contact-cont">
                <a href="https://www.linkedin.com/in/ronan-galvez-08aaa81a8" target="_blank" rel="noopener noreferrer" className="contactLink contact-logo">
                  <span>
                  
                    <img
                      src={require(`../../assets/logos/linkedin.png`)} className="img-width" alt="=Linkedin link"
                    />
                  
                  </span>
                </a>
              </div>
                <h6 className="body-text mt-3">
                  <a href="https://www.linkedin.com/in/ronan-galvez-08aaa81a8" target="_blank" rel="noopener noreferrer" className="contactLink">
                    LinkedIn
                  </a>
                </h6>
            </div>
          </div>

          {/* original */}
          <div className="col-lg-3 col-md-6 col-12 align-self-center text-center justify-content-center row mb-4">
            <div className="jm-logo2 col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container  d-flex justify-content-center align-items-center rounded-circle contact-cont">
                <a href="https://github.com/Ronan-Codes" target="_blank" rel="noopener noreferrer" className="contactLink contact-logo">
                  <span>
                      <img
                        src={require(`../../assets/logos/github.png`)} className="github-img" alt="Github link"
                      />
                  </span>
                </a>
              </div>
                <h6 className="body-text mt-3">
                  <a href="https://github.com/Ronan-Codes" target="_blank" rel="noopener noreferrer" className="contactLink">
                    GitHub
                  </a>
                </h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 align-self-center text-center justify-content-center row mb-4">
            <div className="jm-logo2 col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container  d-flex justify-content-center align-items-center rounded-circle contact-cont email-cont">
                <a href="mailto:galv.ronan@gmail.com" target="_blank" rel="noopener noreferrer" className="contactLink">
                  <span className=''>
                    <img
                      src={require(`../../assets/logos/email.png`)} className="img-width email-photo" alt="=Email link"
                    />
                  </span>
                </a>
              </div>
                <h6 className="body-text mt-3">
                  <a href="mailto:galv.ronan@gmail.com" target="_blank" rel="noopener noreferrer" className="contactLink">
                    ronancodes.gmail.com
                  </a>
                </h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 align-self-center text-center justify-content-center row mb-4">
            <div className="jm-logo2 col-12 rounded-circle row justify-content-center align-content-center">
              <div className="img-container  d-flex justify-content-center align-items-center rounded-circle phone-cont">
              <span className='phone-logo'>
                <a href="tel:+1-352-328-7698" rel="noopener noreferrer" className="contactLink">
                <img
                  src={require(`../../assets/logos/phone.png`)} className="img-width" alt="Phone link"
                />
                </a>
              </span>
              </div>
                <h6 className="body-text mt-3">
                  <a href="tel:+1-352-328-7698" rel="noopener noreferrer" className="contactLink">
                    +1-352-328-7698 
                  </a>
                </h6>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactForm;
