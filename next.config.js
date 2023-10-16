/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "avatars.dicebear.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
