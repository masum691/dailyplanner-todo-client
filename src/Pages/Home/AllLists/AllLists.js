import React, { useEffect, useState } from 'react';

const AllLists = () => {
    const [lists, setLists] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/mytodo')
        .then(res => res.json())
        .then(data => setLists(data))
    }, [])

    // delete an user
    const handleDeleteList = id => {
        const proceed = window.confirm('Are you sure want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/mytodo/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remainList = lists.filter(lists => lists._id !== id)
                setLists(remainList)
            }
        })
        }
    }

    return (
        <div>
            <h1>All lists {lists.length}</h1>
            <div className='bg-primary'>
            {
                lists.map(list => <h5 className='bg-warning'>{list.name} {list.email} <button>update</button> <button onClick={() => handleDeleteList(list._id)}>delete</button></h5>)
            }
            </div>
        </div>
    );
};

export default AllLists;