import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const {name }=useContext(AuthContext)
  console.log(name);
    return (
        <div>
          header  
        </div>
    );
};

export default Navbar;