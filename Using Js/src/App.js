import { useState } from 'react';
import './App.scss';
import quotes from './quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const GetRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const transition = "all 1s";

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 100);
  const green = Math.floor(Math.random() * 100);
  const blue = Math.floor(Math.random() * 100);

  return `rgb(${red}, ${green}, ${blue})`;
}


function App() {
  const [quote, setQuote] = useState(GetRandomQuote());
  const [color, setColor] = useState(getRandomColor());

  const ChangeQuote = () => {
    setQuote(GetRandomQuote());
    setColor(getRandomColor());
  }
  return (
    <div className='background' style={{backgroundColor: color, transition}}>
      <div className='quoteBox'>
        <div className='quoteContent' style={{color: color}}>
          <h2>
            <FaQuoteLeft style={{marginRight: "10px"}} />
            {quote.quote}
            <FaQuoteRight style={{marginLeft: "10px"}} />
          </h2>
          <h4>
          - {quote.author}
          </h4>
        </div>
        <div className='buttons'>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
             style={{
              backgroundColor: color,
              marginRight: "10px"
            }}
          >
            <FaTwitter color='white'/>
          </a>
          <button onClick={ChangeQuote} style={{backgroundColor: color}}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
