import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaAccessibleIcon,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random Person');
  const [image, setImage] = useState(defaultImage);

  const handleOver = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('icon')) {
      const title = e.target.dataset.label;
      setTitle(title);
      setValue(person[title]);
    }
  };
  const fetchPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];

    const { email, phone } = person;
    const image = person.picture.large;
    const age = person.dob.age;
    const password = person.login.password;
    const { first, last } = person.name;
    const { postcode, country } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${postcode} ${country}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setIsLoading(false);
    setTitle('name');
    setValue(newPerson.name);
    setImage(newPerson.image);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"> </div>
      <div className="block">
        <div className="container">
          <img src={image} alt="random user" />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value || 'no value available'}</p>
          <div className="values-list">
            <button data-label="name" onMouseOver={handleOver} className="icon">
              <FaUser />
            </button>
            <button
              data-label="email"
              onMouseOver={handleOver}
              className="icon"
            >
              <FaEnvelopeOpen />
            </button>
            <button data-label="age" onMouseOver={handleOver} className="icon">
              <FaCalendarTimes />
            </button>
            <button
              data-label="street"
              onMouseOver={handleOver}
              className="icon"
            >
              <FaMap />
            </button>
            <button
              data-label="phone"
              onMouseOver={handleOver}
              className="icon"
            >
              <FaPhone />
            </button>
            <button
              data-label="password"
              onMouseOver={handleOver}
              className="icon"
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchPerson}>
            {isLoading ? 'Loading...' : 'Random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
