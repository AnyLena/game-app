import { useState, useEffect } from "react";

const GameList = ({ games, setGames }) => {
  const [nextGame, setNextGame] = useState();

  const handleNext = () => {
    const unplayedGames = games.filter( game => game.played === false);
    if (unplayedGames.length > 0) {
        let next = Math.floor(Math.random() * unplayedGames.length);
        setNextGame(unplayedGames[next].id);
    }
  };

  useEffect(() => {
    if (nextGame !== undefined) {
      setGames(
        games.map((game) => 
          game.id === nextGame ? { ...game, played: true } : game
        )
      );
    }
  }, [nextGame]);

  return (
    <>
      <div className="container">
        {games.map((game) => (
          <div
            className={game.id === nextGame ? "card this-card" : "card"}
            key={game.id}
          >
            {game.name} {game.played ? "true" : "false"}
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
