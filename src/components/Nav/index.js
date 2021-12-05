import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './style.css'

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="container-fluid navbar-custom-style">
        <a id="name" className="navbar-brand fs-4 hover d-sm-none d-md-inline" href="#">
          {/* <span className="d-none d-md-inline">Ronan Galvez</span> */}
          <span>Ronan Galvez</span>
        </a>
        <button className="navbar-toggler mx-2 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

          {categories.map((category, i) => (
            <li
              // className={`mx-1 ${
              //   currentCategory.name === category.name && 'navActive'
              //   }`}
              className="mx-1 hover nav-color"
              key={category.name}
            >
              <a
                onClick={() => {
                  setCurrentCategory(categories[i]);
                  ;
                }}
                className={currentCategory.name === categories[i].name && 'navActive'}
              >
                {capitalizeFirstLetter(category.name)}
              </a>
            </li>
          ))}

          </ul>
        </div>
      </div>
    </nav>  
      


          {/* {categories.map((category, i) => (
            <li
              // className={`mx-1 ${
              //   currentCategory.name === category.name && 'navActive'
              //   }`}
              className="mx-1"
              key={category.name}
            >
              <a
                onClick={() => {
                  setCurrentCategory(categories[i]);
                  ;
                }}
                className={currentCategory.name === categories[i].name && 'navActive'}
              >
                {capitalizeFirstLetter(category.name)}
              </a>
            </li>
          ))} */}

    </header>
  );
}

export default Nav;
