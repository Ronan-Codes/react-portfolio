import React from 'react';
import Projects from '../Projects';

function Portfolio(props) {
  const { currentCategory } = props;

  console.log(currentCategory)
  return (
    <section>
      {/* <h1 id="portfolio" data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1> */}
      {/* <p>{currentCategory.description}</p> */}
      <Projects category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;
