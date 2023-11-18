import SteamProvider, { PROVIDER_ID } from "next-auth-steam";
import NextAuth from "next-auth/next";
import { NextRequest } from "next/server";

async function handler(
  req: NextRequest,
  ctx: { params: { nextauth: string[] } }
) {
  return NextAuth(req, ctx, {
    providers: [
      SteamProvider(req, {
        // @ts-ignore
        clientSecret: process.env.STEAM_WEBAPI_KEY!,
        callbackUrl:
          "http://" +
          (process.env.VERCEL_URL || process.env.URL) +
          "/api/auth/callback",
      }),
    ],
    callbacks: {
      jwt({ token, account, profile, session }) {
        if (account?.provider === PROVIDER_ID) {
          token.account = account;
          token.steam = profile;
        }

        return token;
      },
      session({ session, token }) {
        if ("steam" in token) {
          // @ts-expect-error
          session.user.token = token;
        }

        return session;
      },
    },
  });
}

export { handler as GET, handler as POST };
