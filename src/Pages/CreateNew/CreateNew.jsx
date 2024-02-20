import React, { useState } from 'react';
import Title from '../../Shared/Title';
import Swal from 'sweetalert2';

const CreateNew = () => {

    // const [date, setDate] = useState('')
    // const [details,setDetails]=useState('')
    // onChange={(e)=>setTask(e.target.value)}

    const [text, setText] = useState('')
    const [textDetails, setTextDetails] = useState('')


    const todayDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();

        const dateToday = `${date}-${month}-${year}`;
        return dateToday;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        // console.log(form);
        const task = form.taskName.value;
        const details = form.taskDetails.value;

        // todayDate();
        const date = todayDate();
        // console.log(date);

        // console.log(task,details);

        const taskData = { task, details, date, status: 'new' };
        // console.log(taskData);

        fetch('https://task-manager-server-nine-mu.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }

            })
        setText('')
        setTextDetails('')

    }




    return (
        <div>


            <Title heading={'Create New'}></Title>

            <form action="" onSubmit={handleSubmit}>
                <div className=' shadow-lg py-24 px-12 '>
                    <input type="text" className='text-black px-12 py-8 text-xl bg-white border  w-full h-12 rounded-lg mb-12 ' placeholder='Task Name' name='taskName' value={text}
                        onChange={(e) => setText(e.target.value)}

                    />

                    <textarea placeholder="Task Description" className="text-black px-12 py-8 text-xl bg-white border    rounded-lg   mb-4  w-full  h-44 " name='taskDetails' value={textDetails}
                        onChange={(e) => setTextDetails(e.target.value)}
                    ></textarea>

                    <button className='bg-pink-600 px-8 py-2 text-white text-2xl rounded-lg font-semibold float-right transition-all duration-300 hover:bg-pink-400'> Create</button>

                </div>
            </form>




        </div>
    );
};

export default CreateNew;