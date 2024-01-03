const GameList = ({games}) => {
    return ( 
    <>
    {games.map( game => (
        <div className="" key={game.id}>{game.name}</div>
    ))}
    </>
     );
}
 
export default GameList;