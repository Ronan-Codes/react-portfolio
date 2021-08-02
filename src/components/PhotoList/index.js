import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Pic'd Up",
      category: 'portfolio',
      description: "Pic'd Up is a portfolio hosting site specifically made for photographers. The simple and clean design makes it easy for photographers to showcase their work and even easier for clients to search for a photographer they need.",
      liveUrl: 'https://evening-refuge-82542.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/Project-3.git'
    },
    {
      name: 'Self-Care',
      category: 'portfolio',
      description: 'Self-Care is a simple and convenient journaling app. It utilizes a third-party datepicker app (Zebra Datepicker) to seemlessly keep record of daily journal entries. Future developments may include a workout-log portion, and other self-care related features (Ex. daily motivational quotes).',
      liveUrl: 'https://ronan-codes-self-care.herokuapp.com/',
      github: 'https://github.com/Ronan-Codes/self-care.git'
    },
    {
      name: 'DateNite',
      category: 'portfolio',
      description: 'DateNite simplifies the process of deciding what to do for date night. Simply provide a primary ingredients, and DateNite provides easy-to-make recipes for your ideal date night, dine-in meal and cocktail.',
      liveUrl: 'https://justpuzey.github.io/DateNite/',
      github: 'https://github.com/justpuzey/DateNite'
    },
    {
      name: 'Note Taker',
      category: 'portfolio',
      description: 'Note Taker is your standard note-taking application that allows to you create, save, and delete notes. To create a note, add a Title and Description. For example: you can create a Task titled Homework, and include a description for the steps of your task at hand. This application utilizes Express.js to retrieve, create, and delete data from a JSON.file. Note Taker is deployed through Heroku.',
      liveUrl: 'https://ronan-note-taker.herokuapp.com/',
      github: 'https://ronan-codes.github.io/run-buddy/'
    },
    {
      name: 'Run Buddy',
      category: 'portfolio',
      description: 'Run Buddy is a mock website for a fitness service company. Plain HTML and CSS is utilized to create the layout and various form elements.',
      liveUrl: 'https://ronan-codes.github.io/run-buddy/',
      github: 'https://github.com/Ronan-Codes/run-buddy.git'
    },
    {
      name: 'Weather Dashboard',
      category: 'portfolio',
      description: 'Weather Dashboard is an interactive weather application that allows a user to search a city name and the application will return various weather information. Weather Dashboard utilizes OpenWeatherMap API for acquiring weather information data. Local Storage is utilized to save pase searched cities.',
      liveUrl: 'https://ronan-codes.github.io/weather-dashboard/',
      github: 'https://github.com/Ronan-Codes/weather-dashboard.git'
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
