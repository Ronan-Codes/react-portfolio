import React from 'react';
import headShot from '../../assets/images/headshot/profile-pic.JPG';
import './style.css';

import { Typewriter } from 'react-simple-typewriter'

function About(props) {  
  // var { currentCategory } = props;

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
          An analytical and detail-oriented graduate of UCF Coding Boot camp and UF Psychology. I am aspiring for an entry-level Full-Stack or Front-End Developer position, in an environment where I can grow and collaborate alongside other developers. The coding bootcamp allowed me to immerse myself in coding challenges and projects to develop quality Full-Stack Web Developer Skills (HTML, CSS, JS, React, Node ,Express, Databases, and more), as well as further my collaborative and problem-solving skills.
          <br></br>
          {/* Prior to finding my passion for coding, many of my experiences eventually led to my acceptance into UF’s Grad School Occupational Therapy Program. Although my gut told me the medical field was no longer for me, the journey taught me the valuable lessons of how to learn, to persevere, and to think critically. Among these experiences include being a Certified Personal Trainer at Youfit Health Clubs working with several clients to reach their fitness goal and crafting their personalized workouts. Additionally, I have also worked in several volunteer opportunities: lab research analyzing behaviors, Therapy Center assisting and observing occupational therapists, and UF Sports Medical Institution and Rehab Services. */}
          <br></br>
          Committed to continuing my growth, I’m willing to learn new or legacy technologies/tools. I’m eager to take my passion for learning into the programming workforce!
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
