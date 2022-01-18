import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      {tours.map((tour) => (
        <Tour {...tour} key={tour.id} removeTour={removeTour} />
      ))}
    </section>
  );
};

export default Tours;
