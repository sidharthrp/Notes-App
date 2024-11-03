import React from 'react';
import { supabase } from '../lib/supabase';

function SavedNotes({ data }) {
  return (
    <div className="mt-16">
      <h1 className="text-xl font-bold">Saved Notes</h1>
      <div className="mt-10 border-black border-2 h-48 w-32 text-center shadow-lg">
        <h1 className="text-lg font-bold mt-5 uppercase">Title</h1>
        {Array.isArray(data) && data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <div key={item.id}>
                <li >{item.title}</li>
                <li>{item.description}</li>
              </div>
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
       
      </div>
    </div>
  );
}

export default SavedNotes;
