import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'about me'
    },
    {
      name: 'contact'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'resume'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main className="my-lg-5 my-md-3 my-0">
        {currentCategory ===categories[0] && (
          <About currentCategory={currentCategory}></About>
        )}
        {currentCategory === categories[1] && (
          <ContactForm></ContactForm>
        )}
        {currentCategory === categories[2] && (
          <Portfolio currentCategory={currentCategory}></Portfolio>
        )}
        {currentCategory === categories[3] && (
          <Resume></Resume>
        )}
      </main>

      <footer>
        <div className="footer-icons">
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
