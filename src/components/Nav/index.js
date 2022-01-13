import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import resumePdf from '../../assets/resume/codingResume.pdf';

import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  var threeCategories = categories.slice(0,3)

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  const resume = resumePdf

  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const darkMode = useDarkMode(false);

  return (
    <header className="">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
        <div className="container-fluid navBgColor">
          <a onClick={() => {
                      setCurrentCategory(categories[0]);
                      ;
                    }} 
              id="name" 
              className="navbar-brand fs-4 hover d-sm-none d-md-inline" 
              >
            <span>Ronan Galvez
              <DarkModeToggle
                onChange={setIsDarkMode, darkMode.toggle}
                checked={isDarkMode, darkMode.value}
                size={40}
                className='position-absolute ms-2 mt-1'
                onClick={darkMode.disable}
              />
            </span>
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
                  className="mx-1 hover nav-color resumeLink"
                  key="resume"
                >
                  <a
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

    </header>
  );
}

export default Nav;