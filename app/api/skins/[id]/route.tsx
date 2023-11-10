import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { useRouter } from "next/navigation";

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

interface ItemListResponse {
  success: boolean;
  currency: string;
  timestamp: number;
  items_list: Record<string, csgobackpackItem>;
}

export async function GET(request: NextRequest, context: { params: any }) {
  const { id } = context.params;
  const data: any = await fetch(
    `https://cs2-api.vercel.app/api/items?id=${id}`
  ).then((response) => response.json());

  //TODO: fetch each wear and merge data
  const data2 = await fetch(
    `http://csgobackpack.net/api/GetItemPrice/?currency=USD&id=${data.name} (Battle-Scarred)&time=7&icon=1`
  )
    .then((response) => response.json())
    .then((data: ItemListResponse) => data);

  const merged = {
    ...data,
    ...data2,
  };

  return NextResponse.json(merged, { status: 200 });
}
