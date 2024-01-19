import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
      navigate(`/order/${query}`);
      setQuery("")
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form> 
    </div>
  );
}

export default SearchOrder;
