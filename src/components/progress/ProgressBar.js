import React from 'react';

const ProgressBar = ({ name, progress }) => {
    return (
        <div className="progress-bar">
            <div className="progress-name">{name}</div>
            <div className="progress">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
