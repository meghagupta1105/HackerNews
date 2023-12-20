import React, { useState, useEffect } from "react";
import axios from "axios";

const HackerNewsSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        );
        setSearchResults(response.data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (query.trim() !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="container">
      <h1>Hacker News Search</h1>
      <input
        type="text"
        placeholder="Search Hacker News"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.objectID}>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HackerNewsSearch;
