/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'pbs.twimage.com',  // Add this domain
          'upload.wikimedia.org',  // Example of another domain
          'images.unsplash.com', // You can add more domains here
          // "https://assets.aceternity.com/macbook.png",
          "assets.aceternity.com",
          "res.cloudinary.com"
        ],
      },
};

export default nextConfig;
