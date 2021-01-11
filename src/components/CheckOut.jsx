import React from 'react';
function CheckOut(props){
  return (
    <div className='checkout'>
      {props.total<35?<h3 class='sub-title'>Buy ${35-props.total} more for free delivery!</h3>:
      <h3 class='sub-title'>Total: ${(props.total*1.0825).toFixed(2)}</h3>}
      <div class='checkOutRow'>
        <p>Subtotal: ${props.total}</p>
        <p>Delivery fee: ${props.total<35?8:0}</p>
        <p>Tax: ${props.total<35?((props.total+8)*0.0825).toFixed(2):(props.total*0.0825).toFixed(2)}</p>
        {props.total<35?<p>Total: ${((props.total+8)*1.0825).toFixed(2)}</p>:null}
      </div>
    </div>
  );
}
export default CheckOut;
