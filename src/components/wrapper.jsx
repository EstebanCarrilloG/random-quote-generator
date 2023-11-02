import { useEffect, useState } from "react";
//import { database } from "../database/database";
import "../stylesheets/Wrapper.css";
import { getRandomInt } from "../scripts/rndNumber";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
//import { getQuotes } from "../api/quotesDb";
import $ from "jquery";

let quotesData;

function Wrapper({ color, handleColorChange }) {
  const [quote, setQuote] = useState({});

  //const { quotes } = getQuotes;
  //const {quotes} = database;

  const handleQuot = () => {
    let { quotes } = quotesData;
    console.log(quotes);
    setQuote(quotes[getRandomInt(quotes.length)]);
    handleColorChange();
  };

  function getQuotes() {
    return $.ajax({
      headers: {
        Accept: "application/json",
      },
      url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      success: function (jsonQuotes) {
        if (typeof jsonQuotes === "string") {
          quotesData = JSON.parse(jsonQuotes);
          console.log("quotesData");
          console.log(quotesData);
        }
      },
    });
  }

  useEffect(() => {
    getQuotes().then(() => {
      handleQuot();
    });
  }, []);

  return (
    <div className="wrapper" id="quote-box" style={{ color: color }}>
      <p id="text">
        <span>
          <BiSolidQuoteLeft />
        </span>
        {quote.quote}
        <span>
          <BiSolidQuoteRight />
        </span>
      </p>
      <p id="author">- {quote.author}</p>
      <div className="buttons-container">
        <a
          id="tweet-quote"
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            quote.quote +
            " - " +
            quote.author
          }
          style={{ background: color }}
        >
          <AiOutlineTwitter />
        </a>
        <button
          id="new-quote"
          style={{ background: color }}
          onClick={() => handleQuot()}
        >
          New Quot
        </button>
      </div>
    </div>
  );
}

export default Wrapper;
