// import STORE from "./STORE";

// function List(props) {
//     // use the array of cardsto make an `<div>` for each card
//     const customCard = props.cardIds.map(card => {
//     //   return <CustomContactLi key={card} />
//         return (
//             <CustomCardList key={card} />
//         )
//     });
    
//     return (
//         <section className="List">
//         <header className="header">
//           <h2>{STORE.lists.header}</h2>
//         </header>

//         <div className="cards">
//           {customCard}
//         </div>
//         </section>
//     )
//   }

import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
      </div>
    </section>
  )
}