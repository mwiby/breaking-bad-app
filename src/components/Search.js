import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (search) => {
    setText(search);
    getQuery(search);
  };

  return (
    <section className="search-bar">
      <form>
        <input
          type="text"
          className="input-field"
          placeholder="Search for actor.."
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
