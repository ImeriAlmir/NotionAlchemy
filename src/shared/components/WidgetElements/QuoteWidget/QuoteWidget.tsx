import React, { useState, useEffect } from "react";
import quotesData from "../../../../assets/quotes.json";
import "./QuoteWidget.scss";

interface Quote {
    quote: string;
    author: string;
}

interface QuotesData {
    quotes: Quote[];
}

const QuoteWidget: React.FC = () => {
    const [quote, setQuote] = useState<Quote>({
        quote: quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)].quote,
        author: quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)].author,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
            setQuote(quotesData.quotes[randomIndex]);
        }, 10 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="quote">
            <blockquote>
                <p>{quote.quote}</p>
            </blockquote>
        </div>
    );
};

export default QuoteWidget;
