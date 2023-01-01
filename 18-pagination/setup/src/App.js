import React, { useState } from "react";
import { useFetch } from "./useFetch";
import DisplayFollowers from "./DisplayFollowers";
function App() {
  const { loading, data } = useFetch();
  const [activePage, setActivePage] = useState(0);
  const handlePage = (index) => {
    setActivePage(index);
  };
  const showPrevPage = () => {
    let newPage = activePage - 1;
    if (newPage < 0) {
      newPage = data.length - 1;
    }
    setActivePage(newPage);
  };
  const showNextPage = () => {
    let newPage = activePage + 1;
    if (newPage === data.length) {
      newPage = 0;
    }
    setActivePage(newPage);
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        {!loading && (
          <>
            <div className="container">
              <DisplayFollowers followers={data[activePage]} />
            </div>
            <div className="btn-container">
              <button className="prev-btn" onClick={showPrevPage}>
                previous
              </button>

              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === activePage && "active-btn"
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="next-btn" onClick={showNextPage}>
                next
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
