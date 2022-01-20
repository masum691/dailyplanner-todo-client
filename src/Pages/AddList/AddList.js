import React, { useRef } from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const AddList = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddList = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name, email}
        fetch('http://localhost:5000/mytodo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('list added successfully')
                e.target.reset();
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <Navbar></Navbar>
            <h3>Add list</h3>
            <form onSubmit={handleAddList}>
                <input type="text" ref={nameRef} />
                <input type="email" ref={emailRef} />
                <input type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddList;