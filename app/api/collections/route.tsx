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

export async function GET(_request: Request) {
  const data: any[] = await fetch(
    "https://bymykel.github.io/CSGO-API/api/en/collections.json"
  ).then((response) => response.json());

  fs.writeFileSync(
    "app/api/collections/data/collections.json",
    JSON.stringify(data, null, 2)
  );

  return NextResponse.json(data, { status: 200 });
}
