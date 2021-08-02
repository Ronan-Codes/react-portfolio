import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Gallery currentCategory={currentCategory}></Gallery>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>

      <footer>
        <div className="icons">
          <a href="https://github.com/Ronan-Codes" targer="_blank" rel="noreferrer" title="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ronan-galvez-08aaa81a8" targer="_blank" rel="noreferrer" title="GitHub">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/16479419/ronan-codes" targer="_blank" rel="noreferrer" title="GitHub">
            Stack
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;