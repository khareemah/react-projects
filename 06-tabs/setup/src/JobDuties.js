import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobDuties = ({ duties }) => {
  return (
    <>
      {duties.map((duty, index) => {
        return (
          <div className="job-desc" key={index}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </>
  );
};

export default JobDuties;
