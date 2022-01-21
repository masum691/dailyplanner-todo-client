import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateList.css'

const UpdateList = () => {
    const [uList, setUlist] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/mytodo/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUlist(data))
    }, [])

    const handleWork = e => {
        const updateWork = e.target.value;
        const updateWr = { work: updateWork, time: uList.time }
        setUlist(updateWr)
    }
    const handleTime = e => {
        const updateTime = e.target.value;
        const updateTm = { time: updateTime, work: uList.work }
        setUlist(updateTm)
    }

    const handleUpdateSubmit = e => {
        const url = `http://localhost:5000/mytodo/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uList)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                    setUlist({})
                }
            })
        e.preventDefault();
    }
    return (
        <div className='width-container'>
            <div className="update-container">
                <h1>This is update</h1>
                <h6>
                    <span className='me-2'>{uList.work} <i class="fas fa-laptop-code"></i> </span>
                    <span className='me-2'>{uList.time}</span>
                </h6>
                <h5>{id}</h5>
                <form onSubmit={handleUpdateSubmit}>
                    <input type="text" onChange={handleWork} name="" id="" value={uList.work || ''} />
                    <input onChange={handleTime} type="text" placeholder='time' value={uList.time || ''} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateList;