import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from './SocialLogin';
import Swal from 'sweetalert2';

const Registration = () => {

    const { createAccount } = useContext(AuthContext);

    const [error,setError]=useState('')

    const navigate=useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        // console.log(form.email);
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const mobile = form.mobile.value;

        // console.log(email,name,password,mobile);
        const registerData = { email, name, password, mobile, userRole:'stakeHolder' }
        // console.log(registerData);


        // createAccount(email,password)
        // .then(result=>{
        //     const loggedUser=result.user;
        //     console.log(loggedUser);
        //     if(loggedUser){
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "  Successfully registered!!",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //     }


        // })
        // .catch(error=>{
        //     console.log(error);
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Something went wrong!!!  try again    ",                   
        //         footer: '<a href="#">Why do I have this issue?</a>'
        //       });

        // })


        createAccount(email, password)
            .then(res => {
                const loggedUser = res.user;
                // console.log(loggedUser);

                fetch("https://task-manager-server-nine-mu.vercel.app/users",{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(registerData)
                })
                .then(res=>res.json())
                .then(data=>{
                    // console.log(data);
                    if (data.insertedId) {
                        // reset();
                        Swal.fire(
                            'Congratulations!',
                            'Successfully registered!!!!',
                            'success'
                        )
                        navigate('/login');
                    }

                })
            })
            .catch(error => {
                console.log(error);
                setError(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    // text: "Something went wrong!!!  try again    ",
                    text:  `${error}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })







    }

    return (
        <div className='bg-slate-100 shadow-2xl '>
            <div className='flex items-center justify-center h-screen'>
                <div className='bg-white shadow-2xl   md:h-auto md:w-5/12 px-4 py-16  md:px-12 rounded-lg'>

                    <h1 className='text-4xl font-bold text-center mb-12'>Sign Up</h1>
                    <form action="" onSubmit={handleSubmit}>


                        <div>
                            <input type="email " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='email' placeholder='User Email ' required />

                            <input type="text " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='name' placeholder='User Name ' required />

                            <input type="text " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='mobile' placeholder='Mobile ' required />


                            <input type="text " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='password' placeholder='User Password ' required />

                            <button className='bg-pink-500 w-full rounded-md py-2 text-xl text-white '>Register</button>




                        </div>


                    </form>

                    <SocialLogin></SocialLogin>
                    <div className='mt-8 '>

                        {/* <p className='text-center mb-4'><Link className='border p-2 rounded-lg px-4 bg-blue-500 text-white' to='/login'> Sign In</Link></p> */}
                        <p className='text-center'>
                            <Link >Forgot password</Link>
                        </p>
                        <p className='text-center mt-4'>ALready have an account? <Link to='/login' className='text-blue-600' >Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;