import React,{useState} from 'react';
function Item(props){
  const {url,name,price}=props.item;
  const [count,setCnt]=useState(0)
  function increase(){
    setCnt(prev => prev+1);
    props.update(name,'inc');
  }
  function decrease(){
    setCnt(prev => {
      if (prev!==0){
        props.update(name,'dec');
        return prev-1
      } else {
        return 0
      }
    });
  }
  return (
    <div>
      <img src={url} />
      <h2>item name: {name}</h2>
      <h2>item price: {price}</h2>
      <h2>item count: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default Item;
