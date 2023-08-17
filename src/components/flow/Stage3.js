import React from 'react';

const Stage3 = ({ onNext }) => {
    return (
        <div>
            <h1>What result do I have?</h1>
            <button className="custom-button" onClick={onNext}>Next</button>
        </div>
    );
};

export default Stage3;