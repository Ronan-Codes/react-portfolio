import React from 'react';
import resume from "../../assets/Resume/ronanGalvezResume.pdf";
// import "./style.css";

function Resume() {
    return(
        <section id="resume">
            <h1 id="about">Resume</h1>
            <iframe src ={resume} allow="fullscreen" height="950px" width="80%" frameBorder="0" title="Ronan Galvez"></iframe>
        </section>
    );
}

export default Resume;