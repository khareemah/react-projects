import React, { useState } from "react";

import JobDuties from "./JobDuties";

const Jobs = ({ jobs }) => {
  const [value, setValue] = useState(0);
  const { title, dates, duties, company } = jobs[value];

  const jobBtns = jobs.map((job, index) => {
    const { company } = job;
    return (
      <button
        className={`job-btn ${value === index && "active-btn"}`}
        key={index}
        onClick={() => {
          setValue(index);
        }}
      >
        {company}
      </button>
    );
  });

  return (
    <div className="jobs-center">
      <div className="btn-container">{jobBtns}</div>
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
