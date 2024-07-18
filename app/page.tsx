import Gallery from "@/components/Gallery";
import Image from "next/image";

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
              # zdjecia
              Thumbnail {
                data {
                  attributes {
                    url
                  }
                }
              }
              slug
              Kategoria {
                data {
                  attributes {
                    nazwa_kategorii
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return data;
}

export default async function Home() {
  const { sesjes } = await getPhotos();
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
      <Gallery sesjes={sesjes} />
    </main>
  );
}
