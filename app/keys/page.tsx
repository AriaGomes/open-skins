"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import keysData from "../api/keys/data/keys.json";
import Loading from "../loading";

export default function Keys() {
  const [keys, setKeys] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setKeys(keysData as any[]);
    setLoading(false);
  }, []);

  console.log(keys);

  //TODO: Add a filter component to filter cases by type like musicbox, souviner package, etc.
  return (
    <div className="bg-gray-100 dark:bg-slate-500 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {keys.map((key: any) => (
              <Link href={`/keys/${key.id}`} key={key.id}>
                <Card
                  name={key.name}
                  image={key.image}
                  price={key.price?.["7_days"]?.median}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
