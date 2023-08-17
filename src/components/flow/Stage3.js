import React from 'react';

const Stage3 = ({ onNext, onComplete }) => {
    return (
        <div>
            <h1>What result do I have?</h1>
            <button className="custom-button" onClick={onNext}>Next</button>
            <span>  </span>
            <button className="complete-button" onClick={onComplete}>Done</button>
        </div>
    );
};

export default Stage3;