import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const UpdateList = () => {
    const [uList, setUlist] = useState({})
    const {id} = useParams();

    useEffect( () => {
        const url = `http://localhost:5000/mytodo/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUlist(data))
    } ,[])

    
    const handleName = e => {
        const updateName = e.target.value;
        const updateNm = {name: updateName, email: uList.email}
        setUlist(updateNm)
    }
    const handleEmail = e => {
        const updateEmail = e.target.value;
        const updateEm = {email: updateEmail, name: uList.name}
        setUlist(updateEm)
    }
    const handleUpdateSubmit = e => {

    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is update</h1>
            <h6> Update this one : {uList.name}</h6>
            <h5>{id}</h5>

            <form onSubmit={handleUpdateSubmit}>
                <input type="text" onChange={handleName} value={uList.name || ''} />
                <input type="email" onChange={handleEmail} value={uList.email || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateList;