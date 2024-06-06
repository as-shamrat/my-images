import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h2 className="title">Unsplash Images</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
