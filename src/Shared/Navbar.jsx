import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {

  const {user,logout}=useContext(AuthContext);
  // console.log(user);
  // console.log(user?.photoURL);
  const photo=user?.photoURL;

const navigate=useNavigate();
  
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged out!", "You are successfully logged out", "success");
        logout()
          .then((res) => res.json())
          .then((data) => {
            // navigate('/login')
          });
        navigate("/login");
      }
    });
  };


  return (
    <div>

      <div className="navbar bg-slate-200 fixed ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
          
          
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52  text-white  ">
              <li> <Link to='/'>Dashboard</Link></li>
              <li>  <Link to='/createNew'>Create New</Link></li>
              <li>   <Link to='/newTask'>New Task</Link></li>
              <li>        <Link to='/progress'>In Progress</Link></li>
              <li>  <Link to='/complete'>Completed</Link>  </li>
              <li> 
                <Link to='/cancel'>Canceled</Link>   </li>
                     
              
            </ul>


          </div>
          <Link to='/' className="btn btn-ghost text-xl"> Task <span className='text-red-400 font-semibold '>Manager</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">

        </div>
        <div className="navbar-end">


          <div className="dropdown dropdown-end mr-8">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            
            
              <div className="w-10 rounded-full" 
              title={
                user?.displayName &&
                
                user?.displayName
              
              }
              
              
              >

              {
                user ?
                <> 
                 {
                  user?.photoURL ?
                  <>  
                   <img alt="Tailwind CSS Navbar component" src={photo}  />
                  
                   </>
                  :
                  <> 
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                   </>
                 }
                </>

                :

                <>
                
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </>
              }


               
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
{
  user ?

  <>
   <li><Link    onClick={handleLogout}>Logout</Link></li>
  </>
  :
  <>
   <li><Link    to='/login'>Login</Link></li>
  </>
}

              


            </ul>
          </div>

        </div>
      </div>


    </div>
  );
};

export default Navbar;