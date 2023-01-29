/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'avatars.dicebear.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  }
}
