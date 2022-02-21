import React, { useState } from 'react';
// import Modal from '../Modal';
import { Typewriter } from 'react-simple-typewriter';
import "./style.css"

const Projects = ({ category }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState();

  const [projects] = useState([
    {
      name: "Pic'd Up (In Progress)",
      technology: ['React.js', 'MongoDB', 'Express', 'Node.js', 'GraphQL', 'JWT'],
      category: 'portfolio',
      description: "Pic'd Up is a portfolio hosting site specifically made for photographers. The simple and clean design makes it easy for photographers to showcase their work and even easier for clients to search for a photographer they need.",
      liveUrl: 'https://picd-up-project.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/Project-3.git'
    },
    {
      name: 'Self-Care',
      technology: ['Zebra Datepicker', 'MySQL 2', 'bcrypt', 'dotenv', 'Express', 'Sequelize', 'JS', 'Bootstrap CSS'],
      category: 'portfolio',
      description: 'Self-Care is a simple and convenient journaling app. It utilizes a third-party datepicker app (Zebra Datepicker) to seamlessly keep record of daily journal entries.',
      liveUrl: 'https://ronan-codes-self-care.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/self-care.git'
    },
    {
      name: 'DateNite',
      technology: ['Meal API','Cocktail API', 'JS','Bulma CSS','HTML'],
      category: 'portfolio',
      description: 'DateNite simplifies the process of deciding what to do for date night. Simply provide a primary ingredient, and DateNite provides easy-to-make recipes for your ideal date night, dine-in meal and cocktail.',
      liveUrl: 'https://justpuzey.github.io/DateNite/',
      github: 'https://github.com/Ronan-Codes/DateNite.git'
    },
    {
      name: "Shop-Shop",
      technology: ['React.js', 'Redux', 'Stripe', 'MongoDB', 'Apollo', 'Express', 'IndexedDB', 'GraphQL', 'JWT'],
      category: 'portfolio',
      description: "An E-commerce platform where users can create an account, login, add/remove items from cart, checkout orders via stripe, as well as view order history. Context API was initially used for the application's state management with React, which is then refactored to utilize Redux.",
      liveUrl: 'https://shop-shop-ronancodes.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/shop-shop.git'
    },
    {
      name: 'Weather Dashboard',
      technology: ['Open Weather API','JS','jQuery','CSS','HTML','Moment.js'],
      category: 'portfolio',
      description: "Weather Dashboard is an interactive weather application that allows a user to search for a specific city's weather information. Weather Dashboard utilizes OpenWeatherMap API for acquiring weather data. Local Storage is utilized to save past searched cities.",
      liveUrl: 'https://ronan-codes.github.io/weather-dashboard/',
      github: 'https://github.com/Ronan-Codes/weather-dashboard.git'
    },
    {
      name: "Book for You",
      technology: ['React.js', 'MongoDB', 'Apollo', 'Express', 'GraphQL', 'Heroku', 'Bootstrap CSS', 'jwt-decode', 'JWT', 'bcrypt'],
      category: 'portfolio',
      description: "A book search engine that allows users to login and catalog their book searches. This app utilizes Apollo Server to use GraphQl, replacing an existing RESTful API.",
      liveUrl: 'https://book-for-you-ronancodes.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/book-for-you.git'
    },
    {
      name: 'Tech Blog',
      technology: ['MySQL 2', 'Express', 'Sequelize', 'bcrypt', 'dotenv', 'JS', 'Bootstrap CSS'],
      category: 'portfolio',
      description: 'The Tech Blog allows developers to publish blog posts that other users can comment on. When logged in, users can update or delete their own posts. This is a CMS-style blog, much like a Wordpress site.',
      liveUrl: 'https://ronan-codes-cms-tech-blog.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/cms-tech-blog.git'
    },
    {
      name: 'Note Taker',
      technology: ['Express', 'UUID', 'Bootstrap CSS', 'HTML'],
      category: 'portfolio',
      description: 'Note Taker is your standard note-taking application that allows to you create, save, and delete notes. This application utilizes Express.js to retrieve, create, and delete data from a JSON.file.',
      liveUrl: 'https://ronan-note-taker.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/note-taker.git'
    },
    {
      name: 'Run Buddy',
      technology: ['CSS', 'HTML'],
      category: 'portfolio',
      description: 'Run Buddy is a mock website for a fitness service company. Plain HTML and CSS is utilized to create the layout and various form elements.',
      liveUrl: 'https://ronan-codes.github.io/run-buddy/',
      github: 'https://github.com/Ronan-Codes/run-buddy.git'
    },
    {
      name: 'Budget Tracker',
      technology: ['MongoDB', 'Express', 'Service Workers', 'IndexedDB', 'Manifest', 'Heroku', 'JS'],
      category: 'portfolio',
      description: 'Utilizing IndexedDB and service-workers, this budget tracker app was refactored to provide offline access & functionality to users.',
      liveUrl: 'https://ronan-budget-tracker.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/budget-tracker.git'
    },
    {
      name: 'Work Day Planner',
      technology: ['JS','jQuery','CSS','HTML','Moment.js'],
      category: 'portfolio',
      description: "Work Day Scheduler is a daily planner that saves `To-Do Lists` into a local storage. The program utilizes HTML, CSS & Bootstrap, JavaScript & jQuery, and Moment.js for time related features.",
      liveUrl: 'https://ronan-codes.github.io/work-day-planner',
      github: 'https://github.com/Ronan-Codes/work-day-planner.git'
    },
    {
      name: 'Timed Code Quiz',
      technology: ['JS','CSS','HTML'],
      category: 'portfolio',
      description: "A timed quiz for aspiring web developers built using HTML, CSS, Javascript. DOM manipulation was utilized to provide functionalites such as countdown timer, high score list, and questions appearing consequtively (which can affect the timer).",
      liveUrl: 'https://ronan-codes.github.io/timed-code-quiz',
      github: 'https://github.com/Ronan-Codes/timed-code-quiz.git'
    },
    {
      name: 'Password Generator',
      technology: ['JS','CSS','HTML'],
      category: 'portfolio',
      description: "A random password generator based on criteria provided by the user. The criteria is provided through prompts.",
      liveUrl: 'https://ronan-codes.github.io/pasword-generator-ronan',
      github: 'https://github.com/Ronan-Codes/pasword-generator-ronan.git'
    },
    {
      name: 'Refactor-Horiseon',
      technology: ['CSS', 'HTML'],
      category: 'portfolio',
      description: "This project is a front-end refactoring of a mock marketing agency site. The goal was to improve accessibility, as well as optimize it for search engines by implementing logical structure, semantic HTML elements, alt attributes, and a succinct title.",
      liveUrl: 'https://ronan-codes.github.io/refactor-horiseon',
      github: 'https://github.com/Ronan-Codes/refactor-horiseon.git'
    }
  ]);

  // const currentProjects = projects.filter((project) => project.category === category);

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }

  return (
    <div className="row justify-content-center">
      <div className="row col-lg-12 col-xxl-11 justify-content-center ">

        <div className="col-12 row justify-content-center">
          <div className="col-10">
            <h1 className="portfolio-name text-center text-lg-start my-3 pb-3 pb-lg-0 page-header">
              <Typewriter
                words={['Portfolio']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </h1>
          </div>
        </div>

          {projects.map((project, i) => {
            return (
                <>
                <div className="col-12 row justify-content-center mb-xxl-5 ">
                    <div id="projectPhotoCont" className="col-lg-5 col-md-8 col-sm-12 align-self-center ">
                      {/* {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />} */}

                      <div className="hovereffect">
                          <img
                            src={require(`../../assets/images/projects/${i}.png`)}
                            className="img-responsive"
                            alt='Project images'
                          />
                        {/* ))} */}
                            <div class="overlay row align-items-center justify-content-center border-0">
                              {/* <h2>Effect 13</h2> */}
                                <div className='col-6'><a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><i class="fas fa-link fs-1 main-color lighter-yellow"></i></a></div>
                                <div className='col-6'><a href={project.github} target="_blank" rel="noopener noreferrer"><i class="fas fa-code-branch fs-1 main-color lighter-yellow"></i></a></div>
                            </div>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12 align-self-center align-self-lg-start order-lg-first mb-xxl-0 pb-xxl-0 mb-5 pb-2 ">
                      <div className="card project-card text-start " >
                        <div className="card-body px-0 text-center text-lg-start">
                          <h5 className="card-title fs-3 mb-2 project-name"><span className="project-title">{project.name}</span></h5>
                          <h6 className="card-subtitle mb-3 text-muted mt-3">
                          {project.technology.map((technology, i) => {
                            return(
                            <span className="badge rounded-pill badge-color me-1 mb-1">{technology}</span>
                            )
                          })}
                          </h6>
                          <p className="card-text lh-sm project-description body-text">{project.description}</p>
                          <div>
                            <a href={project.liveUrl} className="card-link btn btn-warning btn-sm btn-style col-md-2 col-3" target="_blank" rel="noopener noreferrer">Site</a>
                            <a href={project.github} className="card-link btn btn-warning btn-sm btn-style col-md-2 col-3" target="_blank" rel="noopener noreferrer">Repo</a>
                            {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><i class="fas fa-link fs-2 main-color col-md-2 col-3"></i></a> */}
                            {/* <a href={project.github} target="_blank" rel="noopener noreferrer"><i class="fab fa-github fs-2 main-color col-md-2 col-3"></i></a> */}
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
              </>
            )
          })}
      </div>
    </div>
    
  );
};

export default Projects;
