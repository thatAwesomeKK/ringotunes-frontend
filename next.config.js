/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'avatars.dicebear.com'],
  },
  experimental: {
    appDir: true,
  }
}
