import { useState } from 'react'
import GameList from './components/GameList'
import './App.css'

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      name: 'Iki',
      played: false
    },
    {
      id: 2,
      name: 'Die Siedler von Catan',
      played: false
    },
    {
      id: 3,
      name: 'Cabo',
      played: false
    },
    {
      id: 4,
      name: 'Die Inseln im Nebel',
      played: false
    },
    {
      id: 5,
      name: 'Maus und Mystik',
      played: false
    },
    {
      id: 6,
      name: 'Spirit Island',
      played: false
    },
    {
      id: 7,
      name: 'Die Crew',
      played: false
    },
    {
      id: 8,
      name: '7 Wonders',
      played: false
    }
  ])

  return (
    <>
     <GameList games={games}/>
    </>
  )
}

export default App
