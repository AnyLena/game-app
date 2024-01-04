import { useState } from "react";
import GameList from "./components/GameList";
import AddGame from "./components/AddGame";
import "./App.css";

function App() {
  const [games, setGames] = useState([
    {
  id: 11,
  name: "Iki",
  played: false,
},
{
  id: 12,
  name: "Die Siedler von Catan",
  played: false,
},
{
  id: 13,
  name: "Cabo",
  played: false,
},
{
  id: 14,
  name: "Die Inseln im Nebel",
  played: false,
}
  ]);

  return (
    <>
      <h1>Game Generator 0.9.1</h1>
      <GameList games={games} setGames={setGames} />
      <br />
      <AddGame setGames={setGames} games={games}/>
    </>
  );
}

// GAME ARRAY FOR TESTING
// {
//   id: 11,
//   name: "Iki",
//   played: false,
// },
// {
//   id: 12,
//   name: "Die Siedler von Catan",
//   played: false,
// },
// {
//   id: 13,
//   name: "Cabo",
//   played: false,
// },
// {
//   id: 14,
//   name: "Die Inseln im Nebel",
//   played: false,
// },
// {
//   id: 15,
//   name: "Maus und Mystik",
//   played: false,
// },
// {
//   id: 16,
//   name: "Spirit Island",
//   played: false,
// },
// {
//   id: 17,
//   name: "Die Crew",
//   played: false,
// },
// {
//   id: 18,
//   name: "7 Wonders",
//   played: false,
// }

export default App;
