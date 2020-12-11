import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import axios from "axios";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(request.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
