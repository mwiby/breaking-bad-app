import Actor from "./Actor";

const ActorsGrid = ({ fetchDone, actors }) => {
  return !fetchDone ? (
    <div>
      <h1>Fetching data</h1>
    </div>
  ) : (
    <section className="cards">
      {actors.map((actor) => (
        <Actor key={actor.char_id} actor={actor} />
      ))}
    </section>
  );
};
export default ActorsGrid;
