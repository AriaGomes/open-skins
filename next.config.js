/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'raw.githubusercontent.com',
            'steamcdn-a.akamaihd.net',
            'community.cloudflare.steamstatic.com'
        ],
    },
}

module.exports = nextConfig
