import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const { name } = useContext(AuthContext)
  // console.log(name);

  return (
    <div>

      <div className="navbar bg-slate-200 fixed ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
          
          
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                
              </li>
              <li><a>Item 3</a></li>
            </ul>


          </div>
          <a className="btn btn-ghost text-xl"> Task <span className='text-red-400 font-semibold '>Manager</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">

        </div>
        <div className="navbar-end">


          <div className="dropdown dropdown-end mr-8">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52 ">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Navbar;