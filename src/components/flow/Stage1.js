import React from 'react';

const Stage1 = ({ onNext }) => {
    return (
        <div>
            <h1>Ask questions</h1>
            <button className="custom-button" onClick={onNext}>Next</button>
        </div>
    );
};

export default Stage1;