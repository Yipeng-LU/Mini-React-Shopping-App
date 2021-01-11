import React from 'react';
function CheckOut(props){
  return (
    <div>
      {props.total<35?<h1>Buy ${35-props.total} more for free delivery!</h1>:null}
      <h1>Subtotal: ${props.total}</h1>
      <h1>Delivery fee: ${props.total<35?8:0}</h1>
      <h1>Tax: ${props.total<35?(props.total+8)*0.0825.toFixed(2):props.total*0.0825.toFixed(2)}</h1>
      <h1>Total: ${props.total<35?(props.total+8)*1.0825.toFixed(2):props.total*1.0825.toFixed(2)}</h1>
    </div>
  );
}
export default CheckOut;
