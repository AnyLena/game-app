import { useState, useEffect } from "react";

const GameList = ({ games, setGames }) => {
  const [nextGame, setNextGame] = useState();
  const [playedGames,setPlayedGames] = useState(0);

  useEffect(() => {
    if (nextGame !== undefined) {
      setGames(
        games.map((game) =>
          game.id === nextGame ? { ...game, played: true } : game
        )
      );
      setPlayedGames( playedGames => playedGames +1);
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
    setGames(games.filter( game => game.id !== id))
  };

  return (
    <>
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
              <button onClick={() => handleDelete(game.id)} className="delete-btn">
                X
              </button>
            )}
          </div>
        ))}
      </div>
      { games.length === 0 ? <p className="alert-box">Please Add Games</p> : playedGames >= games.length ? <><p className="alert-box">All Games Played <br /><button className="input-button input-button--margin">Reset Games</button> <button className="input-button input-button--margin">Start New List</button></p></> : <button className="input-button" onClick={handleNext}>
        Choose Next Game
      </button>}
    </>
  );
};

export default GameList;
