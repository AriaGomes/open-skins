This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Dependencies

This project relies on a couple of services to keep data up to date.

### [CSGO API](https://github.com/ByMykel/CSGO-API)

- used as item DB

### [CSGO Backpack](https://csgobackpack.net/api/)

- Used for pricing

### [Steam Web API](https://steamcommunity.com/dev/)

- used to collect user inventory data

# Environement Variables

A sample file is included in the project showing needed environement variables.

Rename to `.env`

Steam Web API key can be found here: https://steamcommunity.com/dev/apikey
