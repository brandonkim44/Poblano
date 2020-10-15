import React from 'react';
import { Filler } from './filler';

export const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage}/>
        </div>
    )
}

