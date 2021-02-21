import React from 'react';
import "./Card.scss"

const Card = (props) => {

    /**
    * Styles for the card hero's background image
    */
    const styleHero = {
        backgroundImage: 'url(' + props.image + ')'
    }

    /**
    * Styles for the avatar's background image
    */
    const styleAvatar = {
        backgroundImage: 'url(' + props.avatar + ')'
    }

    /**
    * Render the workout playlist section
    */
    let playlistDiv = null;
    if (props.playlistCount > 0) {
        playlistDiv = (
            <a
                className="card__playlist"
                href={props.playlistCount}
            >
                <span className="card__playlist__workout-count">
                    {props.playlistCount}
                </span>
                <span className="card__playlist__workout-text">
                    Workouts
                </span>
                <img
                    className="card__playlist__icon"
                    src="/img/icons/icon_playlist.svg"
                    alt=""
                />
            </a>
        )
    }

    /**
    * Render the stats section in the card's content
    */
    let statsDiv = null,
        statsTimeDiv = null,
        statsDistanceDiv = null;
    if (props.statsTime) {
        statsTimeDiv = (
            <div className="card__stats__time">
                <img
                    className="card__stats__icon"
                    src="/img/icons/icon_timer.svg"
                    alt=""
                />
                <span className="card__stats__text">
                    {props.statsTime}
                </span>
            </div>
        )
    }

    if (props.statsDistance) {
        statsDistanceDiv = (
            <div className="card__stats__distance">
                <img
                    className="card__stats__icon"
                    src="/img/icons/icon_distance.svg"
                    alt=""
                />
                <span className="card__stats__text">
                    {props.statsDistance} M
                    </span>
            </div>
        )
    }

    if (props.statsTime || props.statsDistance) {
        statsDiv = (
            <div className="card__stats">
                {statsTimeDiv}
                {statsDistanceDiv}
            </div>
        )
    }

    /**
    * Render the main component
    */
    return (
        <li className="card">
            <div
                className="card__top"
                style={styleHero}
            >
                {playlistDiv}
            </div>
            <div className="card__bottom">
                <div className="card__content">
                    <h3 className="card__title">
                        {props.cardTitle}
                    </h3>
                    <div
                        className="card__avatar"
                        style={styleAvatar}
                        alt=""
                    ></div>
                    {statsDiv}
                </div>
                <div className="card__cta">
                    <a href={props.detailsLink}>View Details</a>
                </div>
            </div>
        </li>
    )
}

export default Card;