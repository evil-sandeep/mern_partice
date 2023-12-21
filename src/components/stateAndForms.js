// Question 7: React Component State and Forms

// Create a React component that represents a simple form for adding tasks. The form should have input fields for the task title and description. When the user submits the form, the task should be added to a list displayed below the form.

// Your component should:

//     Maintain a state to store the task list and the values of the input fields.
//     Update the state when the user types into the input fields.
//     Add the task to the list when the form is submitted.
//     Display the list of tasks below the form.

//  eslint-disable-next-line
import React, { useState } from 'react';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [values, setValues] = useState({ title: '', description: '' })

    const handleInputchange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();//stops default behavior of from
        if (values.title.trim() === '' || values.description.trim() === '') {
            return;
        }

        setTasks([...tasks, values])
        setValues({ title: '', description: '' })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Task:</label>
                <input type="text"
                    id='title'
                    name="title"
                    value={values.title}
                    onChange={handleInputchange}
                    required />

                <label htmlFor="description">Description:-</label>
                <input type="text"
                    id='description'
                    name='description'
                    value={values.description}
                    onChange={handleInputchange}
                />

                <input type="submit" value="Add Value" />
            </form>

            <h2>Task List:....</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}> <b>  <i>{`${task.title} :-- ${task.description}`}</i></b></li>
                ))}
            </ul>
        </div>
    )


}

export default Tasks;