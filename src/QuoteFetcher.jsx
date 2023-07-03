import { useState } from "react";
import { set } from "react-hook-form";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState(async function(){
        const response= await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    });
    async function fetchQuote() {
        const response= await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return (
        <div>
            <button onClick={fetchQuote}>{quote.author}: {quote.text}</button>
        </div>
    );
}