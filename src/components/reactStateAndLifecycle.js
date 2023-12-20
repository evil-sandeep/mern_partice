import React, { useState, useEffect } from 'react'

const Datta = () => {
    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(false)



    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                if (!response.ok) {
                    throw new Error("Internal api error")
                }
                const data = await response.json();
                setTodo(data)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
                   }
        fetchData();
    }, [])

    if(loading){
        return <p>Loading.......</p>
    }
    if(error){
         <p>Error is {error.message}</p>
    }
     return (
        <div>
            <h1> TO do data is </h1>

            <ul>
                {todo.map(todo=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
     )

}

export default Datta;