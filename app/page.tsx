import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-32 p-24">
      <header className="flex flex-col gap-8 items-start">
        <h1 className="text-6xl ml-10 font-bold text-center">
          Działaj, działaj, działaj
        </h1>
        <p className="text-gray-300 w-[80%] max-w-[27rem] text-justify">
          Zapraszamy do niezapomnianej wędrowki po galerii zdjęć Abdula -
          utalentowanego fotografa, człowieka nieszablonowego, wielowymiarowego,
          niezrozumiałego dla wielu bytów.
        </p>
      </header>
      <Gallery />
    </main>
  );
}
