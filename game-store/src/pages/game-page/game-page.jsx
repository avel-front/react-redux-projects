import React from 'react';
import {useSelector} from "react-redux";
import {GameCover} from "../../components/game-cover";
import {GameGenre} from "../../components/game-genre";
import {GameBuy} from "../../components/game-buy";
import './game-page.css'


// страница с конкретной игрой

export const GamePage = () => {
    const game = useSelector(state => state.game.currentGame);

    if (!game) return (
        <p>
            Здесь нет БД, при обновлении состояние сбрасывается :)
        </p>
    )

    return (
        <div className="game-page">

            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">

                <div className="game-page__left">
                    <iframe
                        width="90%"
                        height="350px"
                        src={game.video}
                        title="Youtube video"
                    />
                </div>

                <div className="game-page__right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text">Популярные метки игры: </p>
                    {game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
                    <div className="game-page__buy-game">
                        <GameBuy game={game}/>
                    </div>
                </div>

            </div>
        </div>
    );
};
