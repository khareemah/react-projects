import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      let newIndex = people.length - 1;
      setIndex(newIndex);
    }
    if (index > people.length - 1) {
      let newIndex = 0;
      setIndex(newIndex);
    }
  }, [index, people]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex((oldValue) => {
        let newValue = oldValue + 1;
        return newValue;
      });
    }, 3000);

    return () => {
      clearInterval(timeout);
    };
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span> / </span>
          Reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, title, image, name, quote } = person;
          // more stuff coming here

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            (index === 0 && personIndex === people.length - 1) ||
            personIndex === index - 1
          ) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
