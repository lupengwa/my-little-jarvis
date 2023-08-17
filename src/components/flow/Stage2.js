import React from 'react';

const Stage2 = ({ onNext }) => {
    return (
        <div>
            <h1>Try</h1>
            <button className="custom-button" onClick={onNext}>Next</button>
        </div>
    );
};

export default Stage2;