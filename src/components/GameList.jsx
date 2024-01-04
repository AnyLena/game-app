import { useState, useEffect } from "react";
import ResetGames from "./ResetGames";

const GameList = ({ games, setGames }) => {
  const [nextGame, setNextGame] = useState();
  const [playedGames, setPlayedGames] = useState(0);

  useEffect(() => {
    if (nextGame !== undefined) {
      setGames(
        games.map((game) =>
          game.id === nextGame ? { ...game, played: true } : game
        )
      );
      setPlayedGames((playedGames) => playedGames + 1);
    }
  }, [nextGame]);

  const handleNext = () => {
    const unplayedGames = games.filter((game) => game.played === false);
    if (unplayedGames.length > 0) {
      let next = Math.floor(Math.random() * unplayedGames.length);
      setNextGame(unplayedGames[next].id);
    }
  };

  const handleDelete = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <>
      <div className="infotext">Games played: {playedGames}</div>
      <div className="container">
        {games.map((game) => (
          <div
            className={
              game.id === nextGame
                ? "card this-card"
                : game.played === true
                ? "card old-card"
                : "card"
            }
            key={game.id}
          >
            {game.name}
            {game.played ? (
              ""
            ) : (
              <button
                onClick={() => handleDelete(game.id)}
                className="delete-btn"
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
      {games.length === 0 ? (
        <p className="alert-box">Please Add Games</p>
      ) : playedGames >= games.length ? (
        <ResetGames games={games} setGames={setGames} setPlayedGames={setPlayedGames} setNextGame={setNextGame}/>
      ) : (
        <button className="input-button" onClick={handleNext}>
          Choose Next Game
        </button>
      )}
    </>
  );
};

export default GameList;
