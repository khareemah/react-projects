import React, { useState, useEffect } from "react";
import data from "./data";
import moment from "moment";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark-theme"
  );
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    // if (!theme) {
    //   setTheme("dark-theme");
    // }
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item, index) => {
          const { title, snippet, date, length } = item;
          return (
            <article className="post" key={index}>
              <h2>{title}</h2>
              <div className="post-info">
                <span>{moment(date).format("dddd Do, YYYY")}</span>
                <span>{length} min read</span>
              </div>
              <p>{snippet}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
