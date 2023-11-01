import { useEffect, useState } from "react";
import { database } from "../database/database";
import "../stylesheets/Wrapper.css"
import { getRandomInt } from "../scripts/rndNumber";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";






function Wrapper({color, handleColorChange}) {
  const [quote, setQuote] = useState({});
  const {quotes} = database;

 
  const handleQuot = () => {
    setQuote(quotes[getRandomInt(quotes.length)]);
    handleColorChange();
  };
  useEffect(() => {
    handleQuot();
  }, []);

  return (
    <div className="wrapper" id="quote-box" style={{"color": color}}>
      <p id="text"  ><span><BiSolidQuoteLeft/></span>{quote.quote}<span><BiSolidQuoteRight/></span></p>
      <p id="author" >- {quote.author}</p>
      <div className="buttons-container">
      <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+ quote.quote + " - " + quote.author } style={{"background": color}}><AiOutlineTwitter/></a>
      <button id="new-quote" style={{"background": color}} onClick={() => handleQuot()}>
        New Quot
      </button>
      </div>
    </div>
  );
}

export default Wrapper;
