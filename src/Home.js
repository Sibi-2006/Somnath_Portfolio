import React from 'react'
import pfp from  "./Images/tojipfp.jpg"
export default function Home() {
    return (
        <div id="home" className=' w-11/12 mx-auto p-4 mt-10 '>
        <div className=' flex flex-col md:flex-row justify-between my-5 '>
                <div className=' w-full md:w-1/3 flex  flex-col justify-center text-left'>
                <p className=' text-sm text-gray-500 '>
                    Welcome to my portfolio
                </p>
                <h1 className=' title'>
                    Somnath.R
                </h1>
                <h4 className=' text-blue-400  text-2xl font-semibold mt-2  '>
                    Mainframe Developer
                </h4>
                <p className=' text-md mt-4 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quam iusto
                </p>

                <button className='resume-btn'>
                    Download Resume
                </button>
            </div>
            <div className='md:w-1/3'>
                <img className=' hidden md:block rounded-lg shadow-lg' src={pfp} alt="Profile" />
            </div>
        </div>
      
    </div>
  )
}
