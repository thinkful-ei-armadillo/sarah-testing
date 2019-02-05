// function Card(props) {
//     console.log(`Card is running somewhere.`)
//     return (
//       <span className='title'>
      
//         <div className="Card">
//         <h3>First card</h3>
//             <span className='content'>
//              {props.children}
//             <p>lorem ipsum</p>
//             </span>
//         </div>
//       </span>
//     )
//   }

import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}