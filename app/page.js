import Header from "@/components/header";
import CreateNote from "@/components/createNote";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Header></Header>
      <CreateNote />
    </div>
  );
}
