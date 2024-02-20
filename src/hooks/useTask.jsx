import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const useTask = () => {

    
  const { data: tasks = [], isLoading: taskLoading, refetch } = useQuery({
    queryKey: ["tasks"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch('http://localhost:5000/tasks');
      // console.log(res);
      return res.json();
    },
  });

  return [tasks, taskLoading, refetch];

    
    // const [tasks, setTasks] = useState([]);
    // useEffect(() => {
    //     const data = async () => {
    //         const res = await fetch('http://localhost:5000/tasks')
    //         const data = await res.json()
    //         setTasks(data)
    //     }
    //     data();
    // }, [])

    // return [tasks];
 
};

export default useTask;