import React from "react";
import Link from "next/link";

export default function ImgCard({
  nazwa = "No jakas nazwa",
}: {
  nazwa?: string;
}) {
  return (
    <Link
      href="/"
      className="block p-5 pt-32 bg-gray-900 rounded-lg border-white/15 border transform hover:-translate-y-3 hover:scale-105 transition-transform"
    >
      <p className="font-bold text-sm text-white/80">{nazwa}</p>
    </Link>
  );
}
