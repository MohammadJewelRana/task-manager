import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
// import { AuthContext } from '../../Provider/AuthProvider';



const SocialLogin = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        // googleSignIn()
        //     .then(res => {
        //         const user = res.user;
        //     //  navigate(from,{replace:true});
        //         // console.log(user);
        //         //  navigate(from,{replace:true});

        //         navigate('/');
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Login with Google successfully!!",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });

        //     })
        //     .catch(error => {
        //         // console.log(error);
        //         Swal.fire({
        //             icon: "error",
        //             title: "Oops...",
        //             text: "Something went wrong!!!  try again    ",                   
        //             footer: '<a href="#">Why do I have this issue?</a>'
        //           });
        //     })


        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, userRole: 'stakeHolder' };

                fetch('https://task-manager-server-nine-mu.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Login with Google successfully!!",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        
                        // navigate('/')

                    })
                // navigate('/')
                navigate(from, { replace: true })
            })

            .catch(error => {
                // console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!!!  try again    ",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })


    }



    return (
        <div className='mx-auto mt-12'>

            <p className='mx-auto  text-center text-xl' >Or SignUp using  </p>
            <div className="  flex items-center justify-center gap-8 my-4 ">

                <button className=" border rounded-full bg-blue-500 p-4 text-white" title='Facebook'><FaFacebook className='text-4xl'></FaFacebook></button>

                <button title='Google' onClick={handleGoogleSignIn} className=" border rounded-full bg-sky-500 p-4 text-white "><FaGoogle className='text-4xl'></FaGoogle></button>
            </div>
            <div className='border -mb-4'></div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;