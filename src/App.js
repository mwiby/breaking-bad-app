import { useState, useEffect } from "react";
import "./App.scss";
import ActorsGrid from "./components/ActorsGrid";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [query, setQuery] = useState("");
  const loadActors = async () => {
    try {
      const res = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const actors = await res.json();
      setActors(actors);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadActors();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ActorsGrid isLoading={isLoading} actors={actors} />
    </div>
  );
};

export default App;
