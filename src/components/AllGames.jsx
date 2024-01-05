import { useState, useEffect } from "react";

const AllGames = ({ games, setGames }) => {
  const [allGames, setAllGames] = useState(null);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [language, setLanguage] = useState("en");
  const [gameToUpdate, setGameToUpdate] = useState({});
  const [bggId,setBggId] = useState(null)

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

//   useEffect(() => { bggId &&
//     fetch(`http://localhost:3000/games/${bggId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(gameToUpdate),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setGames(games.map((game) => (game.id === bggId ? data : game)));
//       });
//   },[gameToUpdate])

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

    // fetch(`http://localhost:3000/games/${bggId}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setGameToUpdate({...data, added_list: true});
    //   });

    // setBggId(bggId)

    // console.log(gameToUpdate);
  };

  return (
    <>
      <h2 className="alert-box">Top 1000 BoardGameGeek Games</h2>
      <form className="radio-form">
        <label htmlFor="radio_en">English</label>
        <input
          type="radio"
          id="radio_en"
          value="en"
          checked={language === "en"}
          onChange={(e) => setLanguage(e.target.value)}
        />

        <label htmlFor="radio_de">German</label>
        <input
          type="radio"
          id="radio_de"
          value="de"
          checked={language === "de"}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </form>
      <form>
        <label htmlFor="search-game-form">Search for Games</label>
        <input
          type="text"
          id="search-game-form"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </form>

      <div className="game-list">
        <div className="game">
          <div>Rank</div>
          <div>Name</div>

          <div>Year</div>
          <div></div>
          <div></div>
        </div>
        {filteredGames &&
          filteredGames.map((game) => (
            <div className="game" key={game.id}>
              <div>{game.rank}</div>
              {language === "en" && <div>{game.name_en}</div>}
              {language === "de" && game.name_de === "" && (
                <div>{game.name_en}</div>
              )}
              {language === "de" && game.name_de !== "" && (
                <div>{game.name_de}</div>
              )}
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
