import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  const data: any[] = await fetch(
    "https://steamcommunity.com/profiles/76561199068718610/inventory/json/730/2"
  ).then((response) => response.json());

  console.log(data);

  return NextResponse.json(data, { status: 200 });
}
