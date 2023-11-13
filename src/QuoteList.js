import { useEffect, useState } from "react";
import Quote from "./Quote";

function QuoteList() {
    const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
            async function getQuotes()
    {
        const response = await fetch ("https://dummyjson.com/quotes");
        const data = await response.json();
        setAllQuotes(data.quotes);
        
    }
            getQuotes();
    },[]);

    const allQuotesJSX = allQuotes.map((quote, index) => {
        return <Quote key={index} {...quote}/>
    })

   return <div>
       {allQuotesJSX}  
   </div>;
    }

export default QuoteList;