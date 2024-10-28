import React from 'react'
import { FaPlus } from "react-icons/fa6";

function CreateNote() {
  return (
    <div>
      <div className='border-black border-2  h-48 w-32 text-center shadow-lg '>
        <h1 className='text-lg font-bold mt-5 uppercase'>Create Note</h1>
        <FaPlus className='text-green-600 h-20 w-10 mt-10 ml-16 '  />
      </div>
    </div>
  )
}

export default CreateNote