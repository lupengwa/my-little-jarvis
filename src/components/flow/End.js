import React from 'react';

const End = ({ onNext }) => {
    return (
        <div>
            <h1>Congratulations!</h1>
            <p>You're the best!!</p>
            <button className="custom-button" onClick={onNext}>Restart</button>
        </div>
    );
};

export default End;