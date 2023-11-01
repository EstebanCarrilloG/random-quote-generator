import axios from "axios";
import { useEffect, useState } from "react";
import { quotesDb } from "../database/quotes";

function Wrapper() {
  const [quote, setQuote] = useState({});
  const [number, setNumber] = useState();
  const { quotes } = quotesDb;

  const getRandomInt = () => {
    const max = 10;
    return Math.floor(Math.random() * max);
  };
  const handleQuot = () => {
    setQuote(quotes[getRandomInt()]);
  };
  useEffect(() => {
    handleQuot();
  }, []);

  return (
    <div className="wrapper" id="quote-box">
      <p id="text">{quote.quote}</p>
      <p id="author">{quote.author}</p>
      <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+ quote.quote + " - " + quote.author }>t</a>
      <button id="new-quote" onClick={() => handleQuot()}>
        New Quot
      </button>
    </div>
  );
}

export default Wrapper;
