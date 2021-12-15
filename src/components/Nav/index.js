import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './style.css'
import resumePdf from '../../assets/resume/codingResume.pdf';

import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  var threeCategories = categories.slice(0,3)

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  function isResume(currentCategory) {
    if (currentCategory === "resume") {
      return (
        `href={resumePdf} target="_blank"`
      )
    }
  }

  const resume = resumePdf

  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const darkMode = useDarkMode(false);

  return (
    <header className="">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="container-fluid navBgColor">
        <a id="name" className="navbar-brand fs-4 hover d-sm-none d-md-inline" href="#">
          {/* <span className="d-none d-md-inline">Ronan Galvez</span> */}
          <span>Ronan Galvez
          {/* <p className='d-absolute'> */}
          <DarkModeToggle
            onChange={setIsDarkMode, darkMode.toggle}
            checked={isDarkMode, darkMode.value}
            size={40}
            className='position-absolute ms-2 mt-1'
            onClick={darkMode.disable}

            // checked={darkMode.value} onChange={darkMode.toggle}
          />
          </span>
          {/* </p> */}
          {/* <span>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={40}
          />
          </span> */}
        </a>
        <button className="navbar-toggler mx-2 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {threeCategories.map((category, i) => (
              <li
                className="mx-1 hover nav-color"
                key={category.name}
              >
                <a
                  onClick={() => {
                    setCurrentCategory(categories[i]);
                    ;
                  }}
                  className={currentCategory.name === categories[i].name && 'main-color'}
                >
                  {capitalizeFirstLetter(category.name)}
                </a>
              </li>
            ))}
          
              <li
                className="mx-1 hover nav-color"
                key="resume"
              >
                <a
                  // onClick={() => {
                  //   setCurrentCategory(currentCategory.name);
                  //   ;
                  // }}
                  className={currentCategory.name === categories[3].name && 'main-color'}
                  href={resume} target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>

            {/* Use if you want to use Resume component instead/again. Not my preference */}
            {/* {categories.map((category, i) => (
              <li
                className="mx-1 hover nav-color"
                key={category.name}
              >
                <a
                  onClick={() => {
                    setCurrentCategory(categories[i]);
                    ;
                  }}
                  className={currentCategory.name === categories[i].name && 'main-color'}
                >
                  {capitalizeFirstLetter(category.name)}
                </a>
              </li>
            ))} */}

          </ul>
        </div>
      </div>
    </nav>  
      


          {/* {categories.map((category, i) => (
            <li
              // className={`mx-1 ${
              //   currentCategory.name === category.name && 'main-color'
              //   }`}
              className="mx-1"
              key={category.name}
            >
              <a
                onClick={() => {
                  setCurrentCategory(categories[i]);
                  ;
                }}
                className={currentCategory.name === categories[i].name && 'main-color'}
              >
                {capitalizeFirstLetter(category.name)}
              </a>
            </li>
          ))} */}

    </header>
  );
}

export default Nav;

// href={resumePdf} target="_blank"
