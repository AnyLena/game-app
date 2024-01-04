const ResetGames = ({games,setGames,setPlayedGames,setNextGame}) => {

    const handleReset =() => {
        console.log(games);
        let resetGames = games.map( game => ({ ...game, played: false }))
        setGames(resetGames)
        console.log(games);
        setPlayedGames(-1);
        setNextGame(null)        
    }
    
    const handleEraseList =() => {
        setGames([]);
        setPlayedGames(-1);
        setNextGame(null)
    }

  return (
    <>
      <p className="alert-box">
        All Games Played <br />
        <button onClick={handleReset} className="input-button input-button--margin">
          Restart List
        </button>{" "}
        <button onClick={handleEraseList} className="input-button input-button--margin">
          Start New List
        </button>
      </p>
    </>
  );
};

export default ResetGames;
