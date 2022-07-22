import React from 'react';
import './Quote.css'

const Quote = ({quote}) => {
  return (
    <div className='info'>
      <h1 className='anime'>Anime: {quote.anime}</h1>
      <h1 className='character'>Character: {quote.character}</h1>
      <h1 className='quote'>{quote.quote}</h1>
    </div>
  );
}

export default Quote;

