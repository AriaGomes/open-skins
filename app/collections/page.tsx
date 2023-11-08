"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import collectionsData from "../api/collections/data/collections.json";
import Loading from "../loading";

export default function Collections() {
  const [collections, setCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCollections(collectionsData as any[]);
    setLoading(false);
  }, []);

  console.log(collections);

  return (
    <div className="bg-gray-100 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {collections.map((collection: any) => (
              <Link href={`/collections/${collection.id}`} key={collection.id}>
                <Card
                  name={collection.name}
                  rarity={collection.rarity}
                  image={collection.image}
                  price={collection.price?.["7_days"]?.average}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
