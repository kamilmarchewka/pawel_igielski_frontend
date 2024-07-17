import React from "react";

export async function generateStaticParams() {
  const sessions = await fetch("http://localhost:1337/api/sesjes", {
    headers: {
      Authorization: `Bearer a14e38320c648b6752890354ebba96fba36c5489b278d61c658ac650a7ab745ff1ec93702b5e374d1a01adc52ce5dd3b71a67aafb8d7725c99a9d9e4317e4603acec9d0d3812a976964f30983416986e2efd9c8ff484c3c126d2673ac1243f182a7f5d7c061ce681aba6c8f47bd32abd48c9defd22c1749d3acff88b95ec9b53`,
    },
  }).then((res) => res.json());

  return sessions.data.map((session: any) => ({
    kategoria: "hotele",
    sesja: session.attributes.slug,
  }));
}

export default function page({ params }: { params: any }) {
  const { sesja } = params;
  console.log(params);
  return <div>{sesja}</div>;
}
