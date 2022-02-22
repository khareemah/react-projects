import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const [column, setColumn] = useState('col-2');
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = ` ${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumn('col-3');
    }
    if (links.length > 3) {
      setColumn('col-4');
    }
  }, [location, links]);
  // let row = 'col-2';
  // if (links.length == 3) {
  //   row = 'col-3';
  // }
  // if (links.length > 3) {
  //   row = 'col-4';
  // }
  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
      <h4>{page}</h4>

      <div className={`submenu-center ${column}`}>
        {links.map(({ label, icon, url }, index) => {
          return (
            <a href={url} key={index}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
