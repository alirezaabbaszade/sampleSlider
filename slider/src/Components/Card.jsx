import React from 'react';
import CardImage from "./CardImage";
import CardItem from "./CardItem";

function Card(props) {
    return (
        <div className="clash-card barbarian">
            <CardImage/>
            <CardItem type='clash-card__level clash-card__level--barbarian'>Level4</CardItem>
            <CardItem type='clash-card__unit-name'>The Barbarian</CardItem>
            <CardItem type='clash-card__unit-description'>
                The Barbarian is a kilt-clad Scottish warrior with an angry,
                battle-ready expression, hungry for
                destruction. He has Killer yellow horseshoe mustache.
            </CardItem>


            <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                <div className="one-third">
                    <div className="stat">20<sup>S</sup></div>
                    <div className="stat-value">Training</div>
                </div>

                <div className="one-third">
                    <div className="stat">16</div>
                    <div className="stat-value">Speed</div>
                </div>

                <div className="one-third no-border">
                    <div className="stat">150</div>
                    <div className="stat-value">Cost</div>
                </div>

            </div>

        </div>

    );
}

export default Card;