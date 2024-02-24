import React from 'react';
import { useQuery } from 'react-query';

const useUSer = () => {
    const { data: users = [], isLoading: userLoading, userRefetch } = useQuery({
        queryKey: ["users"],
        // enabled: loading,
    
        queryFn: async () => {
          const res = await fetch('https://task-manager-server-nine-mu.vercel.app/users');
          // console.log(res);
          return res.json();
        },
      });
    
      return [users, userLoading, userRefetch];
};

export default useUSer;