import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const showNextImage = () => {
    setIndex(checkIndex(index + 1));
  };

  const showPrevImage = () => {
    setIndex(checkIndex(index - 1));
  };

  const showRandomImage = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (index === randomNumber) {
      randomNumber = checkIndex(randomNumber + 1);
    }
    setIndex(randomNumber);
  };
  const checkIndex = (index) => {
    if (index > people.length - 1) {
      const newIndex = 0;
      return newIndex;
    }
    if (index < 0) {
      const newIndex = people.length - 1;
      return newIndex;
    }
    return index;
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div>
        <button className="prev-btn" type="button" onClick={showPrevImage}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" type="button" onClick={showNextImage}>
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className="random-btn" onClick={showRandomImage}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
