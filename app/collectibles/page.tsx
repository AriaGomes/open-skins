"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import collectiblesData from "../api/collectibles/data/collectibles.json";
import Loading from "../loading";

export default function Collectibles() {
  const [collectibles, setCollectibles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCollectibles(collectiblesData as any[]);
    setLoading(false);
  }, []);

  console.log(collectibles);

  return (
    <div className="bg-gray-100 dark:bg-slate-500 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {collectibles.map((collectible: any) => (
              <Link
                href={`/collectibles/${collectible.id}`}
                key={collectible.id}
              >
                <Card
                  name={collectible.name}
                  rarity={collectible.rarity}
                  image={collectible.image}
                  price={collectible.price?.["7_days"]?.average}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
