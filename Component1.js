
import React, { useState} from 'react'

function Component1() {

    const [counter, setCounter] = useState(0)


    const increment =() =>{
        increment = counter +1;
       // console.log(counter);
    }
    return (
        <div>
            <div>counter : {counter}
            <button onClick={increment}>Increment</button>
            </div>
            
        </div>
    )
}

export default Component1
