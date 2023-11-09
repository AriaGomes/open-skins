"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import graffitiData from "../api/graffitis/data/graffitis.json";
import Loading from "../loading";

export default function Crates() {
  const [graffitis, setGraffiti] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setGraffiti(graffitiData as any[]);
    setLoading(false);
  }, []);

  console.log(graffitis);

  //TODO: Add a filter component to filter cases by type like musicbox, souviner package, etc.
  return (
    <div className="bg-gray-100 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {graffitis.map((graffiti: any) => (
              <Link href={`/graffitis/${graffiti.id}`} key={graffiti.id}>
                <Card
                  name={graffiti.name}
                  image={graffiti.image}
                  price={graffiti.price?.["7_days"]?.median}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
