import React,{useState} from 'react';
import Clock from './Clock';
import Greeting from './Greeting';
import Item from './Item';
import items from './data';
import CheckOut from './CheckOut';
import Search from './Search';
import ShowCart from './ShowCart';
function App() {
  const priceMap={};
  items.forEach(item=>{
    priceMap[item.name]=item.price;
  })
  const [total,setTotal]=useState(0);
  const [search,setSearch]=useState('');
  const [isChecked,setChecked]=useState(false);
  const [selected,setSelected]=useState(new Set());
  function update(itemName,status){
    if (status==='inc'){
      setTotal(prev=>prev+priceMap[itemName]);
      setSelected(prev=>{
        prev.add(itemName);
        return prev;
      })
    } else {
      setTotal(prev=>prev-priceMap[itemName]);
      setSelected(prev=>{
        prev.delete(itemName);
        return prev;
      })
    };
  }
  function searchFilter(value){
    setSearch(value);
  }
  function checkbox(){
    setChecked(prev=>!prev);
  }
  return (
    <div>
      <Clock />
      <Greeting />
      <Search searchFilter={searchFilter} />
      <ShowCart checkbox={checkbox}/>
      {
        items.map(item=>{
          if (item.name.includes(search)){
            if (isChecked){
              if (selected.has(item.name)){
                return (<Item item={item} update={update}/>)
              }
            } else {
              return (<Item item={item} update={update}/>)
            }
          }
        })
      }
      <CheckOut total={total}/>
    </div>
  );
}

export default App;
