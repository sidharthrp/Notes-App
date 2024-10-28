import React from 'react'
import { CgNotes } from "react-icons/cg";

function Header() {
  return (
    <div>
        <header className=' h-12 flex justify-center items-center '>
            <div className='w-1/2'></div>
            <div  className='w-1/2 flex justify-between items'>
                <h1 className='text-2xl font-bold uppercase flex items-center gap-2'> <CgNotes className='h-7 w-7' /> Notes  </h1>
                <p>Login</p>
            </div>
            
            
        </header>
    </div>
  )
}

export default Header