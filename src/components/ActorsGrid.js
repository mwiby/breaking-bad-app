import Actor from "./Actor";
import Spinner from "./Spinner";

const ActorsGrid = ({ isLoading, actors }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {actors.map((actor) => (
        <Actor key={actor.char_id} actor={actor} />
      ))}
    </section>
  );
};
export default ActorsGrid;
