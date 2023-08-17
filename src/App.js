import './App.css';
import {useEffect, useState} from 'react';
import Stage1 from "./components/flow/Stage1";
import Stage2 from "./components/flow/Stage2";
import Stage3 from "./components/flow/Stage3";
import End from "./components/flow/End";


function App() {
    const cards = [
        {
            title: 'Card 1',
            content: 'It only takes one second for you to lose the whole thing.'
        },
        {
            title: 'Card 2',
            content: 'When that second comes, Stay there physically, but get out mentally to rethink.'
        },
    ];

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
        </div>
    );
}

export default App;
