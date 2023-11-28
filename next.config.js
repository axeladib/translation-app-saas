/** @type {import('next').NextConfig} */
// TODO: Error: Invalid src prop (https://github.com/shadcn.png) on `next/image`, hostname "github.com" is not configured under images in your `next.config.js`
const nextConfig = {
    images :{
        domains : ["github.com", "lh3.googleusercontent.com"]
    }
}

module.exports = nextConfig
