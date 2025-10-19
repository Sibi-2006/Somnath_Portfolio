import React from 'react'
import pfp from  "./Images/tojipfp.jpg" 
export default function Skills() {
  return (
    <div id="skills" className='flex items-center justify-center my-10'>
        <div className=' w-11/12  mx-5 border-2 border-blue-300 rounded-lg'>
        
                <h2 className='text-3xl font-bold mt-4 text-blue-400 text-center'>Skills</h2>
                <ul className='list-disc list-inside mt-2 text-blue-600 md:ml-10 flex flex-col md:flex-row justify-between items-center'>
                    <li className='skill'>COBOL</li>
                    <li className='skill'>CICS</li>
                    <li className='skill'>JCL</li>
                    <li className='skill'>DB2</li>
                    <li className='skill'>VSAM</li>
                    <li className='skill'>TSO/ISPF</li>
                    <li className='skill'>Git</li>
                </ul>          
      </div>
    </div>
    
  )
}
