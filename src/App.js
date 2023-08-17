import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


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

  return (
      <div className="App">  <div className='slideshow'>    <div className='card'>      <p>{cards[currentIndex].content}</p>    </div>  </div></div>
  );
}

export default App;
