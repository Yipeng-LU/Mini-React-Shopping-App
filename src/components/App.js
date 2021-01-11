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
  function update(itemName,status,count){
    if (status==='inc'){
      setTotal(prev=>prev+priceMap[itemName]);
      setSelected(prev=>{
        prev.add(itemName);
        return prev;
      })
    } else {
      if (count===1){
        setSelected(prev=>{
          prev.delete(itemName);
          return prev;
        })
      }
      setTotal(prev=>prev-priceMap[itemName]);
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
      <div class='greeting'>
        <Clock />
        <Greeting />
      </div>
      <div class='row checkout-search'>
        <div class='col'>
          <CheckOut total={total}/>
        </div>
        <div class='col'>
          <div class='search'>
            <Search searchFilter={searchFilter} />
            <ShowCart checkbox={checkbox}/>
          </div>
        </div>
      </div>
      <div class='row component'>
        {
          items.map(item=>{
            if (item.name.includes(search)){
              if (isChecked){
                if (selected.has(item.name)){
                  return (<div class='col-lg-4 col-md-6'><Item item={item} update={update}/></div>)
                }
              } else {
                return (<div class='col-lg-4 col-md-6'><Item item={item} update={update}/></div>)
              }
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
