import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {useGlobalContext} from './context'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars onClick ={openSidebar}/>
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  );
};

export default Home;
