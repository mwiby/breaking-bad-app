import { useState, useEffect } from "react";
import "./App.scss";
import ActorsGrid from "./components/ActorsGrid";
import Header from "./components/Header";

const App = () => {
  const [actors, setActors] = useState([]);
  const [fetchDone, setFetchDone] = useState([false]);

  const loadActors = async () => {
    try {
      const res = await fetch("https://www.breakingbadapi.com/api/characters");
      const actors = await res.json();
      setActors(actors);
      setFetchDone(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadActors();
  }, []);

  return (
    <div className="container">
      <Header />
      <ActorsGrid fetchDone={fetchDone} actors={actors} />
    </div>
  );
};

export default App;
