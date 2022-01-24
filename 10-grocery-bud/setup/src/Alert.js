import React, { useEffect } from 'react';
import List from './List';

const Alert = (props) => {
  const { message, className, removeAlert, list } = props;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);

  return <p className={`alert alert-${className}`}>{message}</p>;
};

export default Alert;
