import { useState, useEffect } from "react";

const GameList = ({ games, setGames }) => {
  const [nextGame, setNextGame] = useState();

  useEffect(() => {
    if (nextGame !== undefined) {
      setGames(
        games.map((game) =>
          game.id === nextGame ? { ...game, played: true } : game
        )
      );
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
      <button className="input-button" onClick={handleNext}>
        Welches Spiel als nächstes?
      </button>
    </>
  );
};

export default GameList;
