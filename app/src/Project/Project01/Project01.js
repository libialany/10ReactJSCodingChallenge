import React, { useState } from 'react'
import Child from './Child';
import CountContext from './Context';

function Project01() {
    const [count, setCount] = useState(0)
    const countHandler = () => {
        setCount(count + 1);
    }
    return (
        <CountContext.Provider value={{ count, countHandler }}>
            <Child />
            <h1>{count}</h1>
        </CountContext.Provider>
    )
}

export default Project01
