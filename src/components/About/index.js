import React from 'react';
import headShot from '../../assets/images/headshot/profile-pic.JPG';
import './style.css';
function About() {
  var quoteArray = ["Full-Stack Web Developer"]
  var textPosition = 0;
  var speed = 100;
  // var blinker = document.createElement("span");
  // blinker.setAttribute("id", "blinker-span")
  // blinker.innerHTML = "|"

  const typewriter = () => {
    document.querySelector(".about-title").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u007C</span>';
  
    if(textPosition++ != quoteArray[0].length)
      setTimeout(typewriter, speed);
  }
  
  window.addEventListener("load", typewriter)

  window.addEventListener("load", typewriter);

  return (
    <section className="row justify-content-center align-items-center">
      <div className="col-lg-4 row justify-content-center my-lg-0 mb-3 mt-4">
        <div className="col-12 text-center">
        <img src={headShot} className=" profile-pic" style={{ width: "80%" }} alt="cover" />
        </div>
      </div>

      <div className="col-lg-6 mb-5 text-lg-start text-center">
        <h1 className="about-name">Ronan Galvez</h1>
        <h4 className="about-title">Full-Stack Web Developer</h4>

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
