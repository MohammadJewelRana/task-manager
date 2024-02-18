import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form=e.target;
        // console.log(form.email);
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const mobile=form.mobile.value;

        // console.log(email,name,password,mobile);
        const registerData={ email,name,password,mobile}
        console.log(registerData);
        


    }

    return (
        <div className='bg-slate-100 shadow-2xl '>
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-white shadow-2xl   md:h-auto md:w-5/12 px-4 py-16  md:px-12 rounded-lg'>

                <h1 className='text-4xl font-bold text-center mb-12'>Sign In</h1>
                <form action="" onSubmit={handleSubmit}>


                    <div>
                        <input type="email " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='email' placeholder='User Email ' required />

                      
                        <input type="text " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='password' placeholder='User Password ' required />

                        <button className='bg-pink-500 w-full rounded-md py-2 text-xl text-white '>Login</button>




                    </div>


                </form>
                <div className='mt-8 '>

                    <p className='text-center mb-4'><Link className=' ' > Forgot Password</Link></p>
                    <p className='text-center'>
                      Create an account?   <Link className='text-blue-600'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;