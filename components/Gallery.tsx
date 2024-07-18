import React from "react";
import ImgCard from "./ImgCard";

import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";

async function getPhotos() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query getAllSesjes {
        sesjes {
          data {
            id
            attributes {
              nazwa
              slug
            }
          }
        }
      }
    `,
  });

  return data;
}

export default async function Gallery() {
  const { sesjes } = await getPhotos();
  console.log(sesjes.data);
  return (
    <section className="grid grid-cols-3 w-full gap-10">
      {sesjes.data.map(({ attributes }: any) => (
        <>
          <ImgCard key={attributes.slug} nazwa={attributes.nazwa} />
        </>
      ))}
    </section>
  );
}
