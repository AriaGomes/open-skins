import SteamProvider from "next-auth-steam";
import NextAuth from "next-auth/next";

import type { NextRequest } from "next/server";

async function handler(req: any, ctx: { params: { nextauth: string[] } }) {
  return NextAuth(req, ctx, {
    providers: [
      SteamProvider(req, {
        // @ts-ignore
        clientSecret: process.env.STEAM_WEBAPI_KEY!,
        callbackUrl: "http://" + process.env.URL + "/api/auth/callback",
      }),
    ],
  });
}

export { handler as GET, handler as POST };
