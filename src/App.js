import { useEffect, useState } from 'react';
import QuoteList from "./QuoteList"

function App() {
 
  const [quote, setQuote] = useState({});


  return (
    <>

<QuoteList  />
      
    </>
  );
}

export default App;