import React from 'react';

const Podium = (props) => (
    <div>
        <p className="text-xs px-2 text-gray-900 font-medium">{props.record} WPM</p>
        <div className={`w-auto rounded-t-sm ${props.color}`} style={{ height: props.height }}></div>
    </div>
);

export default Podium;