const GameList = ({games}) => {
    return ( 
        <>
    <div className="container">
    {games.map( game => (
        <div className="card" key={game.id}>{game.name}</div>
    ))}
    </div>
    <button className="input-button">Welches Spiel als nächstes?</button>
    </>
     );
}
 
export default GameList;