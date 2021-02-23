import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import "./CardGrid.scss"

class CardGrid extends Component {
    /**
     * Dummy data
     */
    state = {
        cards: [
            {
                cardTitle: "Lake Inniscarra, Ireland—Pyramid",
                image: "/fed-challenge-demo/img/lake-inniscarra.png",
                avatar: "/fed-challenge-demo/img/avatars/person8.png",
                statsTime: "30:53", // With more time, I'd probably have this as an object that accepts 2 integers, e.g: statsTime { hours: 30, minutes: 53 }
                statsDistance: "6,248", // With more time, I'd like to have this as an integer which gets converted to a string with commas in the correct spot later
                playlistCount: 0,
                playlistLink: "#",
                detailsLink: "#"
            },
            {
                cardTitle: "Performance Series",
                image: "/fed-challenge-demo/img/performance-series.png",
                avatar: "/fed-challenge-demo/img/avatars/person6.png",
                statsTime: null,
                statsDistance: null,
                playlistCount: 9,
                playlistLink: "#",
                detailsLink: "#"
            },
            {
                cardTitle: "Slow Pulls and Fast Intervals",
                image: "/fed-challenge-demo/img/slow-pulls.png",
                avatar: "/fed-challenge-demo/img/avatars/person5.png",
                statsTime: "44:13",
                statsDistance: "9,948",
                playlistCount: 0,
                playlistLink: "#",
                detailsLink: "#"
            },
            {
                cardTitle: "20 Minutes to Toned",
                image: "/fed-challenge-demo/img/20-minutes-to-toned.png",
                avatar: "/fed-challenge-demo/img/avatars/person7.png",
                statsTime: null,
                statsDistance: null,
                playlistCount: 12,
                playlistLink: "#",
                detailsLink: "#"
            },
            {
                cardTitle: "Charles Race, Boston, Massachusetts",
                image: "/fed-challenge-demo/img/charles-race.png",
                avatar: "/fed-challenge-demo/img/avatars/person4.png",
                statsTime: "36:22",
                statsDistance: "8,648",
                playlistCount: 0,
                playlistLink: "#",
                detailsLink: "#"
            },
            {
                cardTitle: "Full-Body HIIT Series",
                image: "/fed-challenge-demo/img/full-body-hiit.png",
                avatar: "/fed-challenge-demo/img/avatars/person3.png",
                statsTime: null,
                statsDistance: null,
                playlistCount: 12,
                playlistLink: "#",
                detailsLink: "#"
            },
            {
                cardTitle: "Kafue River, Zambia—Power Stroke Pyramid",
                image: "/fed-challenge-demo/img/kafue-river.png",
                avatar: "/fed-challenge-demo/img/avatars/person2.png",
                statsTime: "22:22",
                statsDistance: "4,660",
                playlistCount: 0,
                playlistLink: "#",
                detailsLink: "#"
            },
            {
                cardTitle: "Shred & Burn Series",
                image: "/fed-challenge-demo/img/shred-burn.png",
                avatar: "/fed-challenge-demo/img/avatars/person10.png",
                statsTime: null,
                statsDistance: null,
                playlistCount: 16,
                playlistLink: "#",
                detailsLink: "#"
            }
        ]
    }

    render() {
        return (
            /** Since we're showing a list of cards, a <ul> is semantic here */
            <ul className="card-grid">
                {
                    /** Returns an array of card <li> elements */
                    this.state.cards.map((card, index) => {
                        return <Card
                            cardTitle={card.cardTitle}
                            image={card.image}
                            avatar={card.avatar}
                            statsTime={card.statsTime}
                            statsDistance={card.statsDistance}
                            playlistCount={card.playlistCount}
                            playlistLink={card.playlistLink}
                            detailsLink={card.detailsLink}
                            key={index}
                        />
                    })
                }
            </ul>
        )
    }
}

export default CardGrid;