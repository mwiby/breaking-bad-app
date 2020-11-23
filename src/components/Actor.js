const Actor = ({ actor }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={actor.img} alt="actor portrait" />
        </div>
        <div className="card-back">
          <h1>{actor.name}</h1>
          <ul>
            <li>
              <span>Role: </span>
              {actor.occupation[0]}
            </li>
            <li>
              <span>Status: </span>
              {actor.status}
            </li>
            <li>
              <span>Nickname: </span>
              {actor.nickname}
            </li>
            <li>
              <span>Actor Name: </span>
              {actor.portrayed}
            </li>
            <li>
              <span>Birthday: </span>
              {actor.birthday}
            </li>
            <li>
              <span>Appearance: </span>
              {actor.appearance}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Actor;
