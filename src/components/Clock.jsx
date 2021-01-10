import React,{useState} from 'react';
function Clock(){
  const [time, setTime] = React.useState("");
  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(getTime, 1000);
  return (<h1>Current time is {time}</h1>);
}
export default Clock
