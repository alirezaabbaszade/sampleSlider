import React from 'react';
import State from "./State";

function UnitStates(props) {
    return (
        <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">

            <State state={20} value="Training"/>
            <State state={16} value="Speed"/>
            <State state={150} value="Cost"/>

        </div>


    )
        ;
}

export default UnitStates;