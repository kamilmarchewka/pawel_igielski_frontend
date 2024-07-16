import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>Działaj, działaj, działaj</h1>
      </header>
      <Gallery />
    </main>
  );
}
