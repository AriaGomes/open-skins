"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import pathesData from "../api/patches/data/patches.json";
import Loading from "../loading";

export default function Patches() {
  const [patches, setPatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPatches(pathesData as any[]);
    setLoading(false);
  }, []);

  console.log(patches);

  //TODO: Add a filter component to filter cases by type like musicbox, souviner package, etc.
  return (
    <div className="bg-gray-100 dark:bg-slate-500 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {patches.map((patch: any) => (
              <Link href={`/patches/${patch.id}`} key={patch.id}>
                <Card
                  name={patch.name}
                  image={patch.image}
                  price={patch.price?.["7_days"]?.median}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
