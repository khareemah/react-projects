import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <section>
      {tours.map((tour) => (
        <Tour {...tour} key={tour.id} />
      ))}
    </section>
  );
};

export default Tours;
