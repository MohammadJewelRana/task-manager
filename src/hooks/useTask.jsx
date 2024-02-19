import React, { useEffect, useState } from 'react';

const useTask = () => {


    
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const data = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()
            setTasks(data)
        }
        data();
    }, [])

    return [tasks];
 
};

export default useTask;