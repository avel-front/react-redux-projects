import React from 'react';
import './game-cover.css'

// верхняя часть карточки - картинка

export const GameCover = ({ image="" }) => {
    return (
        <div
            className="game-cover"
            style = {{
                backgroundImage: `url(${image})`
            }}
        />
    );
};

