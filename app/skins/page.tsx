"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import skinsData from "../api/skins/data/skins.json";
import Loading from "../loading";
import { FilterBar } from "../components/FilterBar";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAppSelector } from "../hooks";
import { debounce } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Skins() {
  const [skins, setSkins] = useState<any[]>([]);
  const [filteredSkins, setFilteredSkins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { search, category } = useAppSelector((state) => state.filter);
  const [hasMore, setHasMore] = useState(true);
  const [animationParent] = useAutoAnimate();

  const filterSkins = useCallback(() => {
    setFilteredSkins(
      skins.filter((skin) => {
        return skin.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, skins]);
  debounce(() => {
    setFilteredSkins(
      skins.filter((skin) => {
        return skin.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, 500),
    [search, skins];

  useEffect(() => {
    setSkins(skinsData as any[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    filterSkins();
  }, [category, search, skins, filterSkins]);

  const fetchMoreData = () => {
    // fetch more data here and append to skins state
    // set hasMore to false when there is no more data to fetch

    if (filteredSkins.length >= skins.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setFilteredSkins(
        filteredSkins.concat(
          skins.slice(filteredSkins.length, filteredSkins.length + 10)
        )
      );
    }, 100);

    console.log(filteredSkins.length);
  };

  return (
    <div className="bg-gray-100 h-full overflow-scroll">
      <FilterBar ref={animationParent} />
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <div ref={animationParent}>
            <InfiniteScroll
              dataLength={filteredSkins.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Loading />}
              endMessage={<p>No more items to display</p>}
              scrollThreshold={0.9}
              className="flex flex-col justify-center items-center w-full h-full"
            >
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
            </InfiniteScroll>
          </div>
        )}
      </div>
    </div>
  );
}
