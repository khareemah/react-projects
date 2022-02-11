import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.length);
    console.log(data.slice(0, 1));
    if (count <= 0) {
      setParagraphs(data.slice(0, 1));
      return;
    }
    if (count > data.length) {
      setParagraphs(data.slice(0, data.length));
      console.log(paragraphs.length);
      return;
    }
    setParagraphs(data.slice(0, count));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {paragraphs.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
