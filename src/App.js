import './App.css';
import {Fragment, useEffect, useState} from 'react';
import Stage1 from "./components/flow/Stage1";
import Stage2 from "./components/flow/Stage2";
import Stage3 from "./components/flow/Stage3";
import End from "./components/flow/End";
import RandNum from "./components/index/Ranindex";

const cards = [
    {
        title: 'Card 1',
        content: 'It only takes one second for you to lose the whole thing.'
    },
    {
        title: 'Card 2',
        content: 'When that second comes, Stay there physically, but get out mentally to rethink.'
    },
    {
        title: 'Card 3',
        content: 'When that second comes, Stay there physically, but get out mentally to rethink.'
    },
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const generateShuffledNumbers = () => {
    //generate array
    let nums = [];
    for(let i = 144; i > 0; i--) {
        nums.push(i)
    }

    // shuffle Array
    shuffleArray(nums);

    return nums
};
const numbers = generateShuffledNumbers();

function App() {

    const [numIdx, setNumIndex] = useState(0);
    const [round, setRound] = useState(1);

    const handleNextRandom = () => {
        if(numIdx+1 < numbers.length) {
            setNumIndex(numIdx + 1);
        } else {
            setNumIndex(0);
            setRound(round+1)
            shuffleArray(numbers);
        }
    }



    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000); // Change image every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    const [currentStage, setCurrentStage] = useState(0);
    const handleNext = () => {
        setCurrentStage((currentStage+1)%3)
    }
    const handleComplete = () => {
        setCurrentStage(-1)
    }

    let currentStageComponent;
    if (currentStage === 0) {
        currentStageComponent = <Stage1 onNext={handleNext} />;
    } else if (currentStage === 1) {
        currentStageComponent = <Stage2 onNext={handleNext} />;
    } else if (currentStage === 2) {
        currentStageComponent = <Stage3 onNext={handleNext} onComplete={handleComplete} />;
    } else {
        currentStageComponent = <End onNext={handleNext} />;
    }


    return (
        <div className="App">
            <div className='slideshow'>
                <div className='card'><p>{cards[currentIndex].content}</p></div>
            </div>
            <div>
                {currentStageComponent}
            </div>

            <div>
                <h1>Round: {round}  </h1> <p> Remain: {numbers.length-numIdx}</p>
                <RandNum number={ numbers[numIdx] } onNextRandom={ handleNextRandom }/>
            </div>
        </div>
    );
}

export default App;
