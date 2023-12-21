// Create a React component called Counter that includes a button to increment the counter and displays the current count. The initial count should be 0. Additionally, implement a button to reset the count to 0. Use the useState hook to manage the state.

import React,{useState} from 'react'
 const Counter =()=>{
  const [count,setCount]=useState(0)

  const increment=()=>{
    setCount(count+1);
  }

  const reset=()=>{
    setCount(0)
  }

  return( <div>

<h2>COunter:{count}</h2>
<button onClick={increment}>Increse</button>
<button onClick={reset}>Reset</button>
  </div>)
 }

 export default Counter;