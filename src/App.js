import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
// import Resume from './components/Resume';

import './darkMode.scss'
import resumePdf from './assets/resume/codingResume.pdf';

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

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
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
        {/* {currentCategory === categories[3] && (
          <Resume></Resume>
        )} */}
      </main>

      <footer className='bg-light'>
        <div className="footer-icons navBgColor py-1">
          <a className='footer-links' href="https://www.linkedin.com/in/ronan-galvez-08aaa81a8" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i class="fab fa-linkedin fs-3"></i>
          </a>
          <a className='footer-links' href="https://github.com/Ronan-Codes" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i class="fab fa-github fs-3"></i>
          </a>
          <a className='footer-links' href="mailto:galv.ronan@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <i class="fas fa-envelope-square fs-3"></i>
          </a>
          <a className='footer-links' href={resumePdf} target="_blank" rel="noopener noreferrer" title="Resume">
            <i class="fas fa-file fs-3"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
