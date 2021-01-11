import React,{useState} from 'react';
function Item(props){
  const {url,name,price}=props.item;
  const [count,setCnt]=useState(0)
  function increase(){
    setCnt(prev => prev+1);
    props.update(name,'inc',count);
  }
  function decrease(){
    setCnt(prev => {
      if (prev!==0){
        props.update(name,'dec',count);
        return prev-1
      } else {
        return 0
      }
    });
  }
  return (
    <div>
      <img class='item-img' src={url} />
      <h3>{name}</h3>
      <p>price: ${price} count: {count}</p>
      <button class='btn btn-success custom-btn' onClick={increase}>+</button>
      <button class='btn btn-danger custom-btn' onClick={decrease}>-</button>
    </div>
  );
}
export default Item;
