import { useState } from "react";

const AddGame = ({ setGames, games }) => {
  const [gameName, setGameName] = useState("");

  const handleNewGame = (e) => {
    e.preventDefault();
    if (gameName === "") {
      alert("Please fill in a Game");
    } else {
      let newGame = {
        id: Math.floor(Math.random() * 10000),
        name: gameName,
        played: false,
      };
      setGames([...games, newGame]);
    }
  };
  return (
    <>
      <form>
        <label htmlFor="new-game-input">Add New Game</label>
        <input
          type="text"
          id="new-game-input"
          onChange={(e) => setGameName(e.target.value)}
        />
        <button className="input-button" onClick={handleNewGame}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddGame;
