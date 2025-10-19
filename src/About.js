import React from 'react'
import pfp from  "./Images/tojipfp.jpg"
export default function About() {
    return (
        <div id="about" className=' w-11/12 p-5'>
        <div className='flex flex-col md:flex-row mt-4'>
            <div className='md:w-1/3'>
                <img className='rounded-lg shadow-lg' src={pfp} alt="Profile" />
            </div>
            <div className='md:w-2/3 md:ml-4 flex flex-col justify-center   '>
            <h2 className='text-3xl font-bold mt-4 text-blue-800'>About Me</h2>

                <p className='text-blue-600'>
                    I am a passionate developer with experience in building web applications.
                </p>
                <h4>Email: somnathr1332@gmail.com </h4>
                <h4>Phone: 9360293815</h4>
                <h4>LinkedIn: <a href="">Somnath Profile</a></h4>
            </div>
        </div>
    </div>
  )
}
