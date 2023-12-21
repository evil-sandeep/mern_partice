// Question:
// Create a React component called AsyncDataLoader that fetches data from an API endpoint when the component mounts. Display the fetched data on the screen. Use the useEffect and useState hooks for handling asynchronous operations.

// The API endpoint to fetch data from is: https://jsonplaceholder.typicode.com/posts/1


import React, { useEffect, useState } from 'react';


const AsyncDataLoader = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const randomTitleById=()=>{
            return Math.floor(Math.random()*100)+1
        }
        const fetchData = async () => {
            try {
                const postId=randomTitleById()
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                if (!response.ok) {
                    throw new Error("Api Dont Work ")
                }
                const post = await response.json();
                setData(post);
            } catch (error) {
                setError(error.message)
            }
        }
        fetchData();

    }, [])
    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <h2>Fetch data is</h2>
            <li key={data.id}> <b>Title is :</b> {data.title}</li>
        </div>
    )
}

export default AsyncDataLoader;