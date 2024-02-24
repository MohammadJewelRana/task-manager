import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useTask from '../hooks/useTask';
import oops from '../assets/oops.jpg'
import LoadingPage from './LoadingPage';

const TaskCard = ({ taskData }) => {

    // const [tasks, setTasks] = useState( [])

    const [selectedValue, setSelectedValue] = useState('');
    const [updateId, setUpdateId] = useState('')

    const [tasks, taskLoading, refetch] = useTask();

    if (taskLoading) {
        return <LoadingPage></LoadingPage>
    }

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://task-manager-server-nine-mu.vercel.app/task/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {


                            // const remaining = taskData.filter(item => item._id !== id)
                            // setTasks(remaining);

                            // setTimeout(() => {
                            //     // Your code to be executed after 2 milliseconds


                            // }, 500000);

                            Swal.fire(
                                'Deleted',
                                'Your task has been deleted',
                                'success'
                            )

                            // window.location.reload();

                        }

                        refetch();
                    })
            }
        });
    };


    // console.log(taskData);

    const handleUpdate = (id) => {

        // console.log(id);
        document.getElementById("my_modal_1").showModal()
        setUpdateId(id)
    }



    const handleSubmit = () => {


        // console.log(updateId);
        // console.log(selectedValue);

        const updatedData = { status: selectedValue }
        // console.log(updatedData);


        fetch(`https://task-manager-server-nine-mu.vercel.app/task/${updateId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task status updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                refetch();
            })


    }



    return (
        <div>
            <div className=" flex flex-wrap   items-center justify-start gap-16 mb-24 md:gap-44">



                {
                    taskData.length === 0 ?

                        <div className=' flex flex-col place-content-center mx-auto mt-14'>
                            <img src={oops} className='rounded-full ' alt="" />
                            <p className='my-12 text-4xl font-bold text-red-600 border p-8 rounded-lg shadow-lg text-center '>No task available right now</p>

                        </div>
                        :

                        <>
                            {
                                taskData.map(item =>
                                    <>
                                        <div className=" shadow-lg w-full md:w-2/5  p-10 ">
                                            <div>
                                                <h1 className="text-2xl font-semibold py-2">{item.task}</h1>
                                                <hr className=' mt-2 text-red-600 bg-red-600 ' />
                                                <p className="mt-2 text-xl capitalize mb-8 text-justify">
                                                    {item.details}
                                                </p>
                                            </div>
                                            <div className="flex justify-between gap-4 items-center flex-wrap ">


                                                <div className="flex items-center justify-between flex-wrap ">
                                                    <div className="mr-2 md:mr-4">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="mr-10 md:mr-16 ">
                                                        <p>{item.date}</p>
                                                    </div>

                                                    <div className=" mr-4 md:mr-8" title="Edit">
                                                        <button
                                                            className=" pt-1 "

                                                            onClick={() => handleUpdate(item._id)}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-6 h-6 cursor-pointer"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <div className="" title="Delete">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6 cursor-pointer"
                                                            title="Delete"
                                                            onClick={() => handleDelete(item._id)}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>


                                                <div className="bg-sky-500 w-auto px-8 text-center py-1  rounded text-white ">
                                                    <p className='capitalize'>{item.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </>
                }
            </div>




            {/* modal  */}
            {/* <form onSubmit={handleSubmit}> */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-2xl">Change Status</h3>
                    <div>
                        <select className="select select-secondary w-full  bg-white mt-4 outline-none  text-xl" value={selectedValue} name='selectOption' onChange={handleSelectChange}>
                            <option selected value='new'>New</option>
                            <option value='completed'>Completed</option>
                            <option value='progress'>Progress</option>
                            <option value='cancel'>Canceled</option>
                        </select>
                    </div>
                    <div className="modal-action">
                        <form method="dialog" onSubmit={handleSubmit}>
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" px-4 py-2 rounded-lg bg-pink-800 text-white ">
                                Ok
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* </form> */}
        </div>
    );
};

export default TaskCard;