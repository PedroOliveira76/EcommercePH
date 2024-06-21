import GameList from "./GameList"

const Games = () => {
   
    return (
        <div className="gameSection text-white flex flex-col bg-black font-semibold">
            <GameList nameCategory="TERROR" secao="terror"/>
            <GameList nameCategory="AÇÃO" secao="acao"/>
            <GameList nameCategory="FPS" secao="fps"/>
            <GameList nameCategory="RPG" secao="rpg"/>
        </div>
    )
}

export default Games