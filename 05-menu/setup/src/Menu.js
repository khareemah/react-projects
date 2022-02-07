import React from 'react';

const Menu = ({ menu }) => {
  return (
    <section className="section-center">
      {menu.map(({ id, title, price, desc, img }) => {
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4>${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
