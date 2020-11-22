const ActorsGrid = ({ fetchDone, actors }) => {
  return !fetchDone ? (
    <div>
      <h1>Fetching data</h1>
    </div>
  ) : (
    <section className="cards">
      {actors.map((actors) => (
        <h1>{actors.name}</h1>
      ))}
    </section>
  );
};
export default ActorsGrid;
