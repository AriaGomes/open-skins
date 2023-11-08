"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import casesData from "../api/crates/data/cases.json";
import Loading from "../loading";

export default function Crates() {
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCases(casesData as any[]);
    setLoading(false);
  }, []);

  console.log(cases);

  //TODO: Add a filter component to filter cases by type like musicbox, souviner package, etc.
  return (
    <div className="bg-gray-100 h-full overflow-scroll">
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
  );
}
