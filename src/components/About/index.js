import React from 'react';
import headShot from '../../assets/images/headshot/profile-pic.JPG';
import './style.css';

// import {useWindupString} from "windups";
import { Pace, WindupChildren, Pause} from "windups"

import { Typewriter } from 'react-simple-typewriter'

function About(props) {
  // const [titleText] = useWindupString("Full-Stack Web Developer", {
  //   pace: (char) => (char === " " ? 0 : 90),
  // });
  
  var { currentCategory } = props;

  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  

  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  }

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
          
          {/* Other version of typewriter */}
          {/* <h4 className="about-title">
            <WindupChildren >
              <Pause ms={11000}/>
              <Pace getPace={(char) => (char === " " ? 0 : 90)}>
              <Pause ms={1100}/>
                {"Full-Stack Web Developer"}
              </Pace>
            </WindupChildren>
          </h4>
          <h4 className="blinker-span fw-bolder">|</h4> */}

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
              onLoopDone={handleDone}
              // onType={handleType}
            />
            </span>
            <span className="p-0 m-0">Web Developer</span>
          </h4>
          {/* <h4 className="about-title">&nbsp;Web Developer</h4> */}
          
          

        </div>
        <div className="my-3">
          <p className="about-text body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
            condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
            mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
            Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
            justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
            dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
            Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
