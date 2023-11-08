import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface csgobackpackItem {
  name: string;
  marketable: number;
  tradable: number;
  classid: string;
  icon_url: string;
  icon_url_large: string | null;
  type: string | null;
  rarity: string;
  rarity_color: string;
  price: {
    "7_days": {
      average: number;
      median: number;
      sold: string;
      standard_deviation: string;
      lowest_price: number;
      highest_price: number;
    };
    "30_days": {
      average: number;
      median: number;
      sold: string;
      standard_deviation: string;
      lowest_price: number;
      highest_price: number;
    };
    all_time: {
      average: number;
      median: number;
      sold: string;
      standard_deviation: string;
      lowest_price: number;
      highest_price: number;
    };
  };
  first_sale_date: string;
  backpack?: csgobackpackItem;
}

interface csgoapi {
  id: string;
  name: string;
  description: string;
  weapon: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
  pattern: {
    id: string;
    name: string;
  };
  min_float: number;
  max_float: number;
  rarity: {
    id: string;
    name: string;
  };
  stattrak: boolean;
  souvenir: boolean;
  paint_index: string;
  wears: {
    id: string;
    name: string;
  }[];
  collections: {
    id: string;
    name: string;
    image: string;
  }[];
  crates: {
    id: string;
    name: string;
    image: string;
  }[];
  image: string;
}

interface ItemListResponse {
  success: boolean;
  currency: string;
  timestamp: number;
  items_list: Record<string, csgobackpackItem>;
}

export async function GET(_request: Request) {
  const data: any[] = await fetch(
    "https://bymykel.github.io/CSGO-API/api/en/music_kits.json"
  ).then((response) => response.json());

  const data2 = await fetch("http://csgobackpack.net/api/GetItemsList/v2/")
    .then((response) => response.json())
    .then((data: ItemListResponse) => data.items_list);

  const merged: any[] = (Object.values(data) as csgobackpackItem[]).map(
    (item: csgobackpackItem) => {
      const match = Object.values(data2 || {}).find(
        (item2: { name: string }) =>
          item2.name.replace(/\s*\([^)]*\)/, "") === item.name
      );
      if (match) {
        return {
          ...item,
          price: { ...match.price },
        };
      }
      return item as csgobackpackItem;
    }
  );

  fs.writeFileSync(
    "app/api/music-kits/data/music-kits.json",
    JSON.stringify(merged, null, 2)
  );

  return NextResponse.json(merged, { status: 200 });
}
