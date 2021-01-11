import React,{useState} from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
import Item from './Item';
import items from './data';
import CheckOut from './CheckOut';
function App() {
  const priceMap={};
  items.forEach(item=>{
    priceMap[item.name]=item.price;
  })
  const [total,setTotal]=useState(0);
  function update(itemName,status){
    if (status==='inc'){
      setTotal(prev=>prev+priceMap[itemName]);
    } else {
      setTotal(prev=>prev-priceMap[itemName]);
    };
  }
  return (
    <div>
      <Clock />
      <Greeting />
      {
        items.map(item=>(<Item item={item} update={update}/>))
      }
      <CheckOut total={total}/>
    </div>
  );
}

export default App;
