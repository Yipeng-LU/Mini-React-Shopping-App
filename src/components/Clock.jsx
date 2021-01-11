import React,{useState} from 'react';
function Clock(){
  const [time, setTime] = React.useState("");
  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(getTime, 1000);
  return (
    <div>
      <p>{time}</p>
      <h1 class='title'>Welcome to mini React shopping app!</h1>
    </div>);
}
export default Clock
