import React from 'react';
import Arrow from "./Arrow";
import Card from "./Card";

function Slider(props) {
    return (

        <div className="slide-container">

            <div className="wrapper">
                <Arrow/>
                <Card/>
                <Arrow/>
            </div>
        </div>


    );

}

export default Slider;