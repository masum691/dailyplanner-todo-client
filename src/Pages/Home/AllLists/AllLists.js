import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllLists.css'

const AllLists = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/mytodo')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])

    // delete an user
    const handleDeleteList = id => {
        const proceed = window.confirm('Are you sure want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/mytodo/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainList = lists.filter(lists => lists._id !== id)
                        setLists(remainList)
                    }
                })
        }
    }

    return (
        <div className='all-lists'>
            <h4 className='mt-4 mb-4'>Today work list ({lists.length})</h4>
            <span className="xyz">
                {`${new Date().toLocaleString()}`}
            </span>
            <div className=''>
                {
                    lists.map(list => <div className='single-list d-lg-flex justify-content-between align-items-center px-4'>
                        <div>
                            <span className='me-2'>{list.work} <i class="fas fa-laptop-code"></i> </span>
                            <span>{list.time}</span>
                        </div>
                        <div>
                            <Link to={`/update/${list._id}`}><i class="far fa-edit edit-icon"></i></Link>
                            <i onClick={() => handleDeleteList(list._id)} class="fas fa-times times-icon"></i> </div></div>)
                }
            </div>
        </div>
    );
};

export default AllLists;