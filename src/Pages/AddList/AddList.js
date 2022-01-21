import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './AddList.css'

const AddList = () => {
    const timeRef = useRef();
    const workRef = useRef();
    const handleAddList = e => {
        const time = timeRef.current.value;
        const work = workRef.current.value;
        const newUser = { time, work }
        fetch('http://localhost:5000/mytodo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('list added successfully')
                    e.target.reset();
                }
            })
        e.preventDefault()
    }
    return (
        <div className="width-container">
            <div className="add-container">
                <h3>Add list</h3>
                <nav>
                    <ul>
                        <li class="nav-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/add-item">Add item</Link>
                        </li>
                    </ul>
                </nav>
                <form onSubmit={handleAddList}>
                    <input type="text" ref={workRef} placeholder='Work type' />
                    <input type="text" placeholder='time' ref={timeRef} />
                    <input type="submit" value="Add item" />
                </form>
            </div>
        </div>
    );
};

export default AddList;