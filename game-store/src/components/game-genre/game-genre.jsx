import React from 'react';
import './game-genre.css'

// жанры игры
export const GameGenre = ({ genre }) => {
    return (
        <span className="game-genre">
            { genre }
        </span>
    );
};

