import React from 'react';

function State({state, value}) {
    return (
        <div className="one-third">
            <div className="stat">{state}</div>
            <div className="stat-value">{value}</div>
        </div>
    );
}

export default State;