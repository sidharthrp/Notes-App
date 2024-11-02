import React from 'react'
import { supabase } from '../lib/supabase'

export async function getServerSideProps() {
  // Fetch data from your Supabase table
  const { data, error } = await supabase.from('Notes').select();
  console.log(data, error)
  if (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [] } };
  }

  return {
    props: {
      data: data || [],
    },
  };
}

function SavedNotes({ data }) {
  getServerSideProps()
  return (
    <div className='mt-16'>
        <h1 className='text-xl font-bold'>Saved Notes</h1>
        <div className='mt-10 border-black border-2  h-48 w-32 text-center shadow-lg '>
            <h1 className='text-lg font-bold mt-5 uppercase'>Title</h1>
            {Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
            <p className='mt-5'>Content</p>
        </div>
    </div>
  )
}

export default SavedNotes