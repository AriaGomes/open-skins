"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import skinsData from "../api/skins/data/skins.json";
import Loading from "../loading";
import { FilterBar } from "../components/FilterBar";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAppSelector } from "../hooks";

export default function Skins() {
  const [skins, setSkins] = useState<any[]>([]);
  const [filteredSkins, setFilteredSkins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { search, category } = useAppSelector((state) => state.filter);

  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    setSkins(skinsData as any[]);
    setFilteredSkins(skinsData as any[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true); // set loading to true before filtering
    setFilteredSkins(
      skins.filter((skin) => {
        return skin.name.toLowerCase().includes(search.toLowerCase());
      })
    );
    setLoading(false); // set loading to false after filtering
  }, [category, search, skins]);

  return (
    <div className="bg-gray-100 h-full overflow-scroll">
      <FilterBar ref={animationParent} />
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Grid>
              {filteredSkins.map((skin: any) => (
                <Link href={`/skins/${skin.id}`} key={skin.id}>
                  <Card
                    name={skin.name}
                    min_float={skin.min_float}
                    max_float={skin.max_float}
                    rarity={skin.rarity}
                    stattrak={skin.stattrak}
                    souvenir={skin.souvenir}
                    image={skin.image}
                    price={skin.price?.["7_days"]?.median}
                    hasFloat
                  />
                </Link>
              ))}
            </Grid>
          </>
        )}
      </div>
    </div>
  );
}
