import React from "react";
import ImgCard from "./ImgCard";

export default async function Gallery({ sesjes }: { sesjes: any }) {
  return (
    <section className="grid grid-cols-3 w-full gap-10">
      {sesjes.data.map(({ attributes }: any) => {
        const { nazwa, Thumbnail, slug, Kategoria } = attributes;
        const thumbnailUrl = Thumbnail.data?.attributes.url;
        const category = Kategoria.data.attributes.nazwa_kategorii;

        return (
          <>
            <ImgCard
              key={slug}
              slug={slug}
              nazwa={nazwa}
              thumbnail={thumbnailUrl}
              category={category}
            />
          </>
        );
      })}
    </section>
  );
}
