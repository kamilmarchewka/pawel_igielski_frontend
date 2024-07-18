import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ImgCard({
  nazwa = "No jakas nazwa",
  thumbnail = "/",
  category,
  slug,
}: {
  nazwa?: string;
  thumbnail: string;
  category: string;
  slug: string;
}) {
  console.log(thumbnail);
  return (
    <Link
      href={`/${slug}`}
      className="block p-5 bg-gray-900 rounded-lg border-white/15 border transform hover:-translate-y-3 hover:scale-105 transition-transform"
    >
      <Image
        // width={30}
        // height={30}
        width={1600}
        height={1000}
        className="block w-full aspect-square object-cover"
        alt=""
        src={"http://localhost:1337" + thumbnail}
      ></Image>
      <p className="font-bold text-sm text-white/80">{nazwa}</p>
    </Link>
  );
}
