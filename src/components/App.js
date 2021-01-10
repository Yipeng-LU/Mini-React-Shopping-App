import React from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
import Item from './Item';
import items from './data';
function App() {
  return (
    <div>
      <Clock />
      <Greeting />
      {
        items.map(item=>(<Item item={item} />))
      }

    </div>
  );
}

export default App;
