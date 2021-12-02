import React from 'react';
import coverImage from '../../assets/cover/profile-pic.JPG';
import './style.css';
function About() {
  return (
    <section className="row justify-content-center align-items-center">
      <div className="col-4 row justify-content-center">
        <div className="col-12">
        <img src={coverImage} className="my-2 profile-pic" style={{ width: "80%" }} alt="cover" />
        </div>
      </div>

      <div className="col-6">
        <h1 className="line-1">Ronan Galvez</h1>
        <h4 className="line-2">Full-Stack Web Developer</h4>

        <div className="my-2">
          <p>
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
