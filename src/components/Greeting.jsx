import React,{useState} from 'react';
function Greeting(){
  const [greet, setGreet] = React.useState("");
  const [name, setName] = React.useState("");
  function handleChange(event){
    const value=event.target.value;
    setName(value);
    const hour=new Date().getHours();
    let greetContent=''
    if (hour<12){
      greetContent='Good morning!';
    }
    else if (hour<18){
      greetContent='Good afternoon!';
    }
    else{
      greetContent='Good evening!';
    }
    setGreet(greetContent);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Your name" />
      <h1>{greet} {name}</h1>
    </div>
  );
}
export default Greeting
