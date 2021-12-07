import React from 'react';
import headShot from '../../assets/images/headshot/profile-pic.JPG';
import './style.css';

// import {useWindupString} from "windups";
import { Pace, WindupChildren, Pause} from "windups"

function About(props) {
  // const [titleText] = useWindupString("Full-Stack Web Developer", {
  //   pace: (char) => (char === " " ? 0 : 90),
  // });
  
  var { currentCategory } = props;

  return (
    <section className="row justify-content-center align-items-center">
      <div className="col-lg-4 row justify-content-center my-lg-0 mb-3 mt-4">
        <div className="col-12 text-center">
        <img src={headShot} className=" profile-pic" style={{ width: "80%" }} alt="cover" />
        </div>
      </div>

      <div className="col-lg-6 mb-5 text-lg-start text-center">
        <h1 className="about-name">Ronan Galvez</h1>
        <div className="d-flex justify-content-lg-start justify-content-center title-container">
          
          <h4 className="about-title">
            <WindupChildren >
              <Pause ms={11000}/>
              <Pace getPace={(char) => (char === " " ? 0 : 90)}>
              <Pause ms={1100}/>
                {"Full-Stack Web Developer"}
              </Pace>
            </WindupChildren>
          </h4>
          {/* <h4 className="about-title">Web Developer</h4> */}
          <h4 className="blinker-span fw-bolder">|</h4>
          

        </div>
        <div className="my-3">
          <p className="about-text">
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
