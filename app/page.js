import Header from "@/components/header";
import CreateNote from "@/components/createNote";
import SavedNotes from "@/components/savedNotes";
import { supabase } from "@/lib/supabase";

// This is a server component by default in the App Router
export default async function Home() {
  // Fetch data from your Supabase table
  const { data, error } = await supabase.from('Notes').select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <Header />
      <CreateNote />
      <SavedNotes data={data || []} /> {/* Pass the fetched data as props */}
    </div>
  );
}