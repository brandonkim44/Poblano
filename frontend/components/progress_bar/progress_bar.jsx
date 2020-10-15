import React from 'react';
import { Filler } from './filler';

export const ProgressBar = (props) => {
    debugger;
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage}/>
        </div>
    )
}

