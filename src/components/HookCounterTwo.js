import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
  const  incrementFive =() =>{
        for(let i=0;i<5;i++){
           
            setCount(prevCount=>prevCount+1)

        }
    }
    return (
        <div>
            <h2>  Count = {count}  </h2>
            <div>     <button onClick={() => setCount(initialCount)}>Reset</button>  </div>
            <div>       <button onClick={() => setCount(prevCount=>prevCount+1)}>Increment</button>    </div>
            <div>     <button onClick={() => setCount(prevCount=>prevCount-1)}>Decrement</button>      </div>
            <div>       <button onClick={incrementFive}>Increment 5</button>    </div>

        </div>
    )
}

export default HookCounterTwo