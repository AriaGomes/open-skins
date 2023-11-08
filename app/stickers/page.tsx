"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import stickerData from "../api/stickers/data/stickers.json";
import Loading from "../loading";

export default function Stickers() {
  const [stickers, setStickers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setStickers(stickerData as any[]);
    setLoading(false);
  }, []);

  console.log(stickers);

  return (
    <div className="bg-gray-100 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {stickers.map((sticker: any) => (
              <Link href={`/stickers/${sticker.id}`} key={sticker.id}>
                <Card
                  name={sticker.name}
                  rarity={sticker.rarity}
                  image={sticker.image}
                  price={sticker.price?.["7_days"]?.average}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
