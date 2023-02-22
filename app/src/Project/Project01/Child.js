import React, { useContext } from 'react'
import CountContext from './Context'
export default function Child() {
    const context = useContext(CountContext)
    const { countHandler } = context;
    return (
        <div>
            <button onClick={countHandler}>
                Increment
            </button>
        </div>
    )
}
