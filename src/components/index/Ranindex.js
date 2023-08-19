import React from "react";

const RandNum = ({number, onNextRandom}) => {
    return (
        <div>
            <h1>{number}</h1>
            <button className="custom-button" onClick={ onNextRandom }>One More</button>
        </div>
    );
}

export default RandNum;