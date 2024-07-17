import React from "react";

export async function generateStaticParams() {
  const sessions = await fetch("http://localhost:1337/api/sesjes", {
    headers: {
      Authorization: `Bearer b3f3beb56821188ae9e92873f6887010c83d9a46fca52ef01c540cd9ce5f93bd01fb9c21992ab963537277ac67e00f98f53d03c0115256ea26bdda3fb02f6a6e34b71d13822895f2ed8a9569944152b4ad92a9df1b9f950e678effe05bcb6a910a71b89b691c89721ec1fb71b59ac214f214293b0ea86d939d99dfafdd912379`,
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
