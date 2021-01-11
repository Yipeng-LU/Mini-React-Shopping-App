import React,{useState} from 'react';
function ShowCart(props){
  const [isChecked,setChecked]=useState(false);
  function checkChecked(event){
    setChecked(prev=>!prev);
    props.checkbox();
  }
  return (
    <div>
      <p>Only show items in my shopping cart: </p>
      <input onChange={checkChecked} type='checkbox' checked={isChecked}/>
    </div>
  );
}
export default ShowCart;
