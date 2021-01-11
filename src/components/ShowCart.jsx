import React,{useState} from 'react';
function ShowCart(props){
  const [isChecked,setChecked]=useState(false);
  function checkChecked(event){
    setChecked(prev=>!prev);
    props.checkbox();
  }
  return (
    <div class='show-cart'>
      <label>Only show items in my shopping cart:  </label>
      <input class='customBox' onChange={checkChecked} type='checkbox' checked={isChecked}/>
    </div>
  );
}
export default ShowCart;
