import Header from "@/components/header";
import CreateNote from "@/components/createNote";
import Image from "next/image";
import SavedNotes from "@/components/savedNotes";

export default function Home() {
  return (
    <div >
      <Header></Header>
      <CreateNote />
      <SavedNotes />
    </div>
  );
}
