import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = new URLSearchParams(request.nextUrl.searchParams);
  const steamid = searchParams.get("steamid");
  console.log(steamid);

  if (!steamid) {
    return NextResponse.json({ error: "Missing steamid" }, { status: 400 });
  }

  const data: any[] = await fetch(
    `https://steamcommunity.com/inventory/${steamid}/730/2`
  ).then((response) => response.json());

  console.log(data);

  return NextResponse.json(data, { status: 200 });
}
