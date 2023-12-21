// you have a React component that renders a list of tasks, and you want to implement a feature to delete a task when a delete button is clicked.

// How would you structure your component to handle task deletion efficiently?
// Can you write a sample code snippet for the onClick handler of the delete button to remove a task from the list?
// Api =https://www.googleapis.com/books/v1/volumes?q=React

import React, { useState, useEffect } from 'react';

const ListOfBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=MERN');
                if (!res.ok) {
                    throw new Error('Internal Server error');
                }
                const data = await res.json();
                setBooks(data.items); 
                setLoading(false);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    const deleteBook = (bookId) => {
       
        const updatedBooks = books.filter((b) => b.id !== bookId);
        setBooks(updatedBooks);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>The Books are:</h2>
            <ul>
                {books.map((b) => (
                    <li key={b.id}>
                        Book Name is: {b.volumeInfo.title}{' '}
                        <button onClick={() => deleteBook(b.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListOfBooks;
