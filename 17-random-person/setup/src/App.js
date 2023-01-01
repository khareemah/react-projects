import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaAccessibleIcon,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [person, setPerson] = useState({});
  const [key, setKey] = useState("name");
  const [value, setValue] = useState("random person");

  const handleMouseOver = (key) => {
    setKey(key);
    setValue(person[key]);
  };
  const fetchPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const personData = data.results[0];
    const {
      name,
      email,
      dob: { age },
      location: { street },
      phone,
      picture: { large },
      login: { password },
    } = personData;
    const newPerson = {
      name: `${name.first} ${name.last}`,
      email,
      age,
      street: `${street.name} ${street.number}`,
      phone,
      img: large,
      password,
    };

    setPerson(newPerson);
    setValue(newPerson.name);
  };
  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.img) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {key} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={() => handleMouseOver("name")}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={() => handleMouseOver("email")}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseOver={() => handleMouseOver("age")}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={() => handleMouseOver("street")}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={() => handleMouseOver("phone")}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={() => handleMouseOver("password")}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchPerson}>
            "random user"
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
