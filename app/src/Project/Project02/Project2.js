import React, { useState } from 'react'
import '../../App.css'

function Project2() {
    const [list, setList] = useState([])
    const [value, setValue] = useState("")
    const changeHandler = (e) => {
        setValue(e.target.value);
    }
    const addList = () => {
        setList([...list, value]);
        setValue("")
        console.log(list);
    }
    const deleteHandler = (e) => {
        setList(list.filter(el => el !== e.target.name))
    }
    return (
        <div>
            <div className='header'>
                <input onChange={changeHandler} value={value} />
                <button onClick={addList}>Add</button>
            </div>
            <div className='list'>
                <ul>
                    {list.length > 0 ?
                        list.map((item, index) => {
                            return <div key={index}>
                                <li>{item}</li>
                                <button onClick={deleteHandler} name={item}> Delete </button>
                            </div>
                        }) :
                        <li>No items</li>
                    }
                </ul>
            </div>
        </div>

    )
}

export default Project2
