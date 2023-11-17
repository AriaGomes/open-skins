"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import musicKitData from "../api/music-kits/data/music-kits.json";
import Loading from "../loading";

export default function MusicKits() {
  const [musicKits, setMusicKits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMusicKits(musicKitData as any[]);
    setLoading(false);
  }, []);

  console.log(musicKits);

  //TODO: Add a filter component to filter cases by type like musicbox, souviner package, etc.
  return (
    <div className="bg-gray-100 dark:bg-slate-500 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {musicKits.map((musicKit: any) => (
              <Link href={`/music-kits/${musicKit.id}`} key={musicKit.id}>
                <Card
                  name={musicKit.name}
                  image={musicKit.image}
                  price={musicKit.price?.["7_days"]?.median}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
