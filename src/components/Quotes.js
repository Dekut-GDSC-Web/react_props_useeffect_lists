import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Quote from './Quote';


function Quotes() {
    const [quotes, setquotes] = useState([]);
    useEffect(() => {
      
        axios.request("https://animechan.vercel.app/api/quotes").then(function(response){
            console.log(response.data)
            setquotes(response.data)
        }).catch(function(error){
            console.log(error)
        })
    
    }, [])
  return (
    
    <div>
      <h2>Web Dev</h2>
      <div>
      {
        quotes.map(quote => 
        <Quote key={quote.id} quote={quote} />
        )
      }
      </div>
    </div>
  )
}

export default Quotes;
