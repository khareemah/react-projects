import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const categories = ['all', ...new Set(items.map((item) => item.category))];
  const filterMenu = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }
    const newMenu = items.filter((menuItem) => menuItem.category === category);
    setMenu(newMenu);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>

      <Categories categories={categories} filterMenu={filterMenu} />

      <Menu menu={menu} />
    </main>
  );
}

export default App;
