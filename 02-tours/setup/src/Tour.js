import React, { useState, useContext } from 'react';

const Tour = ({ id, name, image, info, price }) => {
  const [readMore, setReadMore] = useState(false);
  const removeTour = useContext(ToursContext);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>
            {readMore ? info : info.substring(0, 250)}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
