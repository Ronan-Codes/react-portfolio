import React from 'react';
import headShot from '../../assets/images/headshot/profile-pic.JPG';
import './style.css';

import { Typewriter } from 'react-simple-typewriter'

function About(props) {  
  var { currentCategory } = props;

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }

  return (
    <section className="row justify-content-center align-items-center">
      <div className="col-lg-4 row justify-content-center my-lg-0 mb-3 mt-4">
        <div className="col-12 text-center">
        <img src={headShot} className=" profile-pic" style={{ width: "80%" }} alt="cover" />
        </div>
      </div>

      <div className="col-lg-6 mb-5 text-lg-start text-center">
        <h1 className="about-name mb-0 pb-0">Ronan Galvez</h1>
        <div className="d-flex justify-content-lg-start justify-content-center title-container">

          <h4 className="about-title mt-0">
            <span id="typewriter-span" className="border-none p-0 m-0">
            <Typewriter
              words={['Front-End','Full-Stack']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={90}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
            </span>
            <span className="p-0 m-0">Web Developer</span>
          </h4>
          
        </div>
        <div className="my-3">
          <p className="about-text body-text">
          Software Developer with 4-5 years of experience, focusing on front-end development using React, HTML5, CSS3, JavaScript, TypeScript, jQuery, Node, Express, MongoDB, GraphQL, MySQL. An analytical and detail-oriented graduate of UCF Coding Boot camp and UF Psychology. I am currently looking for my next contract focusing on ReactJS! I am an eager learner and I thrive in environments where I can grow and collaborate alongside other developers. 
          <br></br>

          {/* <br></br> */}
          {/* Committed to continuing my growth, I’m willing to learn new or legacy technologies/tools. I’m eager to take my passion for learning into the programming workforce! */}
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
