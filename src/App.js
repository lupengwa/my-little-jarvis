import './App.css';
import {useEffect, useState} from 'react';
import Stage1 from "./components/flow/Stage1";
import Stage2 from "./components/flow/Stage2";
import Stage3 from "./components/flow/Stage3";
import End from "./components/flow/End";
import RandNum from "./components/index/Ranindex";
import ProgressBar from "./components/progress/ProgressBar";

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
        content: 'Feedback:but I don’t think his depth warrants him being the Golang subject matter expert.'
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

// let numbers = generateShuffledNumbers();
// console.log(numbers)
const numbers = [35,90,48,38,114,122,70,102,23,36,42,139,141,87,1,20,115,62,128,94,117,133,17,52,91,46,89,71,26,41,55,108,32,83,39,30,127,84,77,81,21,76,25,24,110,3,93,116,64,123,58,107,85,120,2,129,37,16,136,27,104,99,8,13,29,112,11,6,66,101,9,67,95,96,135,33,63,45,78,31,28,79,18,111,44,144,56,61,118,125,49,12,100,54,5,4,98,130,74,82,138,72,88,97,15,43,113,86,50,121,57,7,131,132,14,69,65,124,19,80,137,22,105,59,73,92,53,47,106,10,143,134,51,126,75,34,142,40,140,109,103,68,60,119]



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
                <ProgressBar name="Job Seeking" progress={2} />
                <ProgressBar name="Coding" progress={0} />
                <ProgressBar name="System Design" progress={0} />
                <ProgressBar name="Leadership" progress={0} />
            </div>

            {/*<div>*/}
            {/*    <h1>Round: {round}  </h1> <p> Remain: {numbers.length-numIdx}</p>*/}
            {/*    <RandNum number={ numbers[numIdx] } onNextRandom={ handleNextRandom }/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
