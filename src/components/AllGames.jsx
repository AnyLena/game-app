import { useState, useEffect } from "react";

const AllGames = ({ games, setGames }) => {
  const [allGames, setAllGames] = useState(null);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  //   useEffect(() => {
  //     fetch("http://localhost:3000/games/")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setAllGames(data);
  //       });
  //   }, []);

  useEffect(() => {
    fetch("http://localhost:3000/games/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (searchValue === "") {
          setFilteredGames(data);
        } else {
          const filteredGames = data.filter((game) =>
            game.name_en.toLowerCase().includes(searchValue.toLowerCase())
          );
          setFilteredGames(filteredGames);
        }
      });
  }, [searchValue]);

  const handleAdd = (nameEn, nameDe, bggId) => {
    const newGame = nameDe
      ? {
          id: bggId,
          name: nameDe,
          played: false,
        }
      : {
          id: bggId,
          name: nameEn,
          played: false,
        };
    setGames([...games, newGame]);
  };

  return (
    <>
      <h2 className="alert-box">Top 1000 BoardGameGeek Games</h2>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
      <div className="game-list">
        <div className="game">
          <div>Rank</div>
          <div>Name (EN)</div>
          <div>Name (DE)</div>
          <div>Year</div>
          <div></div>
        </div>
        {filteredGames &&
          filteredGames.map((game) => (
            <div className="game" key={game.id}>
              <div>{game.rank}</div>
              <div>{game.name_en}</div>
              <div>{game.name_de}</div>
              <div>{game.year}</div>
              <button
                className="input-button--small"
                onClick={() => handleAdd(game.name_en, game.name_de, game.id)}
              >
                Add to List
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default AllGames;
