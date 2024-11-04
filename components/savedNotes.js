import React from 'react';
import { supabase } from '../lib/supabase';

function SavedNotes({ data }) {
  return (
    <div className="mt-16">
      <h1 className="text-xl font-bold mb-4">Saved Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <div
              className="border-black border-2 h-48 w-32 text-center shadow-lg p-2"
              key={item.id}
            >
              <h2 className="font-semibold">{item.title || "No Title"}</h2>
              <p>{item.description || "No Description"}</p>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default SavedNotes;

