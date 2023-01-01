import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  // return <h2>markdown preview starter</h2>;
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        >
          {markdown}
        </textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
