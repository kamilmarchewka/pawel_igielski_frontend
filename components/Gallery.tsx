import React from "react";
import ImgCard from "./ImgCard";

async function getPhotos() {
  const res = await fetch("http://localhost:1337/api/sesjes", {
    headers: {
      Authorization: `Bearer a14e38320c648b6752890354ebba96fba36c5489b278d61c658ac650a7ab745ff1ec93702b5e374d1a01adc52ce5dd3b71a67aafb8d7725c99a9d9e4317e4603acec9d0d3812a976964f30983416986e2efd9c8ff484c3c126d2673ac1243f182a7f5d7c061ce681aba6c8f47bd32abd48c9defd22c1749d3acff88b95ec9b53`,
    },
  });

  const data = res.json();

  return data;
}

export default async function Gallery() {
  const { data } = await getPhotos();
  // console.log(data);
  return (
    <section className="grid grid-cols-3 w-full gap-10">
      {data.map(({ id, attributes }: any) => (
        <ImgCard key={id} />
      ))}
    </section>
  );
}
