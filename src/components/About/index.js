import React from 'react';
import coverImage from '../../assets/cover/temp-portrait.jpeg';
function About() {
  return (
    <section className="row justify-content-center align-items-center">
      <div className="col-4 row justify-content-center">
        <div className="col-12">
        <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
        </div>
      </div>

      <div className="col-6">
        <h1 className="line-1">Ronan Galvez</h1>
        <h5 className="">
          {/* <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ "Front-End", "Full-Stack Web Developer" ]'></span> */}
            <span className="front-full"></span> <span> Web Developer</span>
        </h5>

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
