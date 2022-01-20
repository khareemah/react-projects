import React, { useState, useEffect } from 'react';
import Header from './Header';
import Jobs from './Jobs';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
      setIsLoading(false);
      console.log(jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <>
      <section className="section">
        <Header />
        <Jobs jobs={jobs} />
        <button type="button" className="btn">
          more info
        </button>
      </section>
    </>
  );
}

export default App;
