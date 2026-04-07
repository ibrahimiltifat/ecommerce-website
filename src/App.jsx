import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Greeting(props) {
  return <h1>Hello I am {props.name}, {props.age} years old</h1>;
}


function App() {
  const showGreeting = false;

  function toggleGreeting() {
    if(showGreeting ) {
      alert("called ");
      showGreeting = false;
    } else {
      showGreeting = true;
    }
  }

  return (
    <div>
      <button onClick={toggleGreeting}> click me</button>
      { showGreeting && <Greeting name={"ibrahim"} age={"24"}/> }

    </div>
  );
}



export default App
