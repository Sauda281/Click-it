import React from "react";
import "./Card.css";

// this component render images to the screen
const Card = props => (
    <div className ="card img-container hover">
        <img allt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
        </div>
);

export default Card;