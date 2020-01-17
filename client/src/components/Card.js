import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h1>{props.name}</h1>
          <ul>
            <li>{props.country}</li>
            <li>Searches: {props.searches}</li>
          </ul>
      </div>
    </div>
  )
}

export default Card;