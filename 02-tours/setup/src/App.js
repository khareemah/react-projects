import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>

      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
