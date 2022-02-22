import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (  
    <AppContext.Provider value={
      {
        isSidebarOpen,
        isModalOpen,
        openSidebar, 
        openModal,
        closeSidebar,
        closeModal
      }
    }>{children}</AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider, useGlobalContext};
