import React,{useState} from 'react';
function Greeting(){
  const [greet, setGreet] = React.useState("");
  const [name, setName] = React.useState("");
  const [isClicked, setClick] = React.useState(false);
  function handleChange(event){
    const value=event.target.value;
    setName(value);
  }
  function handleClick(){
    if (!name){
      return;
    }
    setClick(true);
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
    <div class='component'>
      {
        isClicked?null:
        <div class='container'>
          <label>Please tell us your name: </label>
          <input class='form-control customInput' onChange={handleChange} type="text" placeholder="Your name" value={name}/>
          <button class='btn btn-primary' onClick={handleClick}>Submit</button>
        </div>
      }
      <h1 class='title'>{isClicked?<div>{greet} {name}</div>:null}</h1>
    </div>
  );
}
export default Greeting
