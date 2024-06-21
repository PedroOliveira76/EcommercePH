import { useState, useEffect } from "react"

import { GameProps } from '../../../Types/GamesTypes'
import { fetchGames } from "../../../api/GamesAPI"

interface gameNameProps{
    nameCategory:string;
    secao:string;
}

const GameList = ({nameCategory,secao}:gameNameProps) => {
    const [gamesData, setGamesData] = useState<GameProps[]>([])
    
    useEffect(() => {
        const fetchData = () => {
            fetchGames().then(data => {
                setGamesData(data);
            }).catch(error => {
                console.error('Error fetching games:', error);
            });
        }
        fetchData();
    }, [])
    return (
        <>
            <div className="bg-AlmostBlack text-LightCyan h-20 flex justify-center items-center text-2xl">
                <h1 className="h-full flex justify-center items-center">JOGOS DE {nameCategory}</h1>
            </div>
            <div className="section1 overflow-x-auto overflow-y-hidden flex bg-DarkGray text-LightGrayG" id={secao}>
                {gamesData.map((item, index) => (
                    <div key={index} className="w-full h-full flex justify-around items-center">
                        <div className="card flex p-2 flex-col w-72 h-52 items-center justify-center">
                            <div className="w-full h-full justify-center items-center">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="w-14 h-14">
                                <img src={item.image} alt={item.description} className="w-full h-full" />
                            </div>
                            <div className="w-full flex justify-start items-center">
                                <p>valor: {item.price}</p>
                            </div>
                            <div className="w-full h-20">
                                <button className="w-full h-full">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GameList