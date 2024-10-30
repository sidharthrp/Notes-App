import React from 'react'

function SavedNotes() {
  return (
    <div className='mt-16'>
        <h1 className='text-xl font-bold'>Saved Notes</h1>
        <div className='mt-10 border-black border-2  h-48 w-32 text-center shadow-lg '>
            <h1 className='text-lg font-bold mt-5 uppercase'>Title</h1>
            <p className='mt-5'>Content</p>
        </div>
    </div>
  )
}

export default SavedNotes