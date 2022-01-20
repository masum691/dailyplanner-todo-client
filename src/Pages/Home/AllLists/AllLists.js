import React, { useEffect, useState } from 'react';

const AllLists = () => {
    const [lists, setLists] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/mytodo')
        .then(res => res.json())
        .then(data => setLists(data))
    }, [])
    return (
        <div>
            <h1>All lists {lists.length}</h1>
            <div className='bg-primary'>
            {
                lists.map(list => <h5 className='bg-warning'>{list.name} {list.email}</h5>)
            }
            </div>
        </div>
    );
};

export default AllLists;