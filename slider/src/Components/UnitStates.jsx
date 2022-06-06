import React from 'react';
import State from "./State";

function UnitStates({units, name}) {
    const states = units.map((unit, index) => <State
        state={unit.state}
        value={unit.value}
        no-border={index === units.length-1}/>)
    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>

            {states}

        </div>


    )

}

export default UnitStates;