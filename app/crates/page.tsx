"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import cratesData from "../api/crates/data/crates.json";
import Loading from "../loading";

export default function Crates() {
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCases(cratesData as any[]);
    setLoading(false);
  }, []);

  console.log(cases);

  //TODO: Add a filter component to filter cases by type like musicbox, souviner package, etc.
  return (
    <div className="bg-gray-100 dark:bg-slate-500 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {cases.map((cases: any) => (
              <Link href={`/crates/${cases.id}`} key={cases.id}>
                <Card
                  name={cases.name}
                  image={cases.image}
                  price={cases.price?.["7_days"]?.median}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
