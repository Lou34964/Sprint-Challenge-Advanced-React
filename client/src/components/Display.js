import React from 'react';
import Card from './Card';

const Display = (props) => {
  return (
    <div className='player-cards'>
      {
        props.data.map(item => {
          return(
            <Card key={item.id} name={item.name} country={item.country} searches={item.searches} />
          );
        })
      }
    </div>
  );
}

export default Display;