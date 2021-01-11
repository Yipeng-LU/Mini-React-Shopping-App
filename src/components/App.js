import React,{useState} from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
import Item from './Item';
import items from './data';
import CheckOut from './CheckOut';
import Search from './Search';
function App() {
  const priceMap={};
  items.forEach(item=>{
    priceMap[item.name]=item.price;
  })
  const [total,setTotal]=useState(0);
  const [search,setSearch]=useState('');
  function update(itemName,status){
    if (status==='inc'){
      setTotal(prev=>prev+priceMap[itemName]);
    } else {
      setTotal(prev=>prev-priceMap[itemName]);
    };
  }
  function searchFilter(value){
    setSearch(value);
  }
  return (
    <div>
      <Clock />
      <Greeting />
      <Search searchFilter={searchFilter} />
      {
        items.map(item=>{
          if (item.name.includes(search)){
            return (<Item item={item} update={update}/>)
          }
        })
      }
      <CheckOut total={total}/>
    </div>
  );
}

export default App;
