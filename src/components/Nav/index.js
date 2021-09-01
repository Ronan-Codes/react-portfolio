import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

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
    <header className="flex-row px-1" id="headerStyle">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">🧑🏻‍💻</span> Ronan Galvez
        </a>
      </h2>
      <nav>
        <ul className="flex-row">

          {/* <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li> */}

          {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li> */}

          {categories.map((category, i) => (
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
          ))}

          {/* <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li> */}

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
