import React from 'react'

function Footer() {
  return (
    <div id='Contact' className='flex flex-col md:flex-row justify-around bg-slate-400 text-white p-4 md:p-10 text-center md:text-left items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl'></h3>
        </div>
        <div className='p-2'>
        <ul className='text-sm md:text-xl flex flex-col space-y-2'>
            <li>Mail : <span className='text-black'>sonnaajay16@gmail.com</span></li>
            <li>Phone : <span className='text-black'>8464052048 </span></li>
        </ul>
        </div>
        
    </div>
  )
}

export default Footer