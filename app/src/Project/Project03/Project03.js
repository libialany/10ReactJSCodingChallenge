import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Project03() {
    const url = "https://jsonplaceholder.typicode.com/posts/2/comments"
    const [listUsers, setListUsers] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: url
        })
            .then((response) => {
                setListUsers(response.data)
            });
    }, [])
    return (
        <div>
            {listUsers.length > 0 && listUsers.map(user => {
                return <p key={user.id}>|{user.name} | {user.email}|</p>
            })}
        </div>
    )
}
