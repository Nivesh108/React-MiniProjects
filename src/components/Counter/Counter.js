import React from 'react'
import Button from '@mui/material/Button'
import './Counter.css' 

function Counter() {
    const [count, setCount] = React.useState(0);

  return (
    <div className="counter-container">
        <h1 style={{color:'white'}}>Counter</h1>
        <p id="count">{count}</p>
            <div className='counter-btns'>
                <Button variant="outlined" style={{margin:'0 1rem'}} onClick={() => setCount(count+1)}>Increment</Button>
                <Button variant="outlined" style={{margin:'0 1rem'}} onClick={() => setCount(0)}>Reset</Button>
                <Button variant="outlined" style={{margin:'0 1rem'}} onClick={() => setCount(count-1)}>Drcrement</Button>
            </div>
    </div>
  )
}


export default Counter


