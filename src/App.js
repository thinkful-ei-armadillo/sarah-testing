// import React from 'react';
// import Card from './CARD';
// import List from './LIST';
// import STORE from './STORE';
// function App() {
//   return (
//     <main className='App'>
//       <Card />
//       {/* content goes here */}
//     </main>
//   );
// }
// // function Card(props) {
// //   console.log(`Card is running somewhere.`)
// //   return (
// //     <span className='title'>   
// //       <div className="Card">
// //       <h3>First card</h3>
// //           <span className='content'>
// //            {props.children}
// //           <p>lorem ipsum</p>
// //           </span>
// //       </div>
// //     </span>
// //   )
// // }
// export default App;


import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;