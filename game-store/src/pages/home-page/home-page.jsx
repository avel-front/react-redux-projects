import React from 'react';
import { GameItem } from '../../components/game-item'
import './home-page.css'
import {getGames} from "../../components/utils";


export const HomePage = () => {
    const GAMES = getGames();

    return (
        <div className="home-page">
            {GAMES.map(game =>
            <GameItem game={game} key={game.id} />
            )}
        </div>
    );
};
