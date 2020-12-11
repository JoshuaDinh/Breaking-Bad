import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [input, setInput] = useState("");

  const onChange = (q) => {
    setInput(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          onChange={(e) => onChange(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={input}
        />
      </form>
    </section>
  );
};

export default Search;
