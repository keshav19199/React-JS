import { useState } from "react";

 function Counter()
 {
    let[Counter,setCounter] = useState(10);
     let [color, setColor] = useState("Yellow");

    console.log(setCounter);
    function Increase()
    {
      setCounter(Counter +1);
    }
    function Decrease()
    {
      setCounter(Counter -1);
    }
    function Rest()
    {
      setCounter(10);
    }

    function Red()
    {
      setColor("Red");
      console.log(color);
    }
    function Orange()
    {
      setColor("Orange");
      console.log(color);
    }

    return(
      <>
      <h1 style={{color:color}}> JAY SHREE RAM</h1>
      <h2>{Counter}</h2>

      <button onClick={Increase}> Increase </button>
      <button onClick={Decrease}> Decrease </button>
      <button onClick={Rest}> Rest </button>

     <button onClick={Red}> Red </button>
      <button onClick={Orange}> Orange </button>

      </>  
    )
    
 }
 export default Counter;