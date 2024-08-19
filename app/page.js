import Hero from "@/src/components/Hero";
import Highlights from "@/src/components/Highlights";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}
