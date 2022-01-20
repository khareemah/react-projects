import React, { useState } from 'react';
import JobDuties from './JobDuties';

const Jobs = ({ jobs }) => {
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="jobs-center">
      {/* btn-container */}
      <div className="btn-container">
        {jobs.map((job, index) => {
          return (
            <button
              className={`job-btn ${index === value && 'active-btn'}`}
              key={index}
              onClick={() => setValue(index)}
            >
              {job.company}
            </button>
          );
        })}
      </div>

      {/* job info */}

      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>

        <JobDuties duties={duties} />
      </article>
    </div>
  );
};

export default Jobs;
