/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'pbs.twimage.com',  // Add this domain
          'upload.wikimedia.org',  // Example of another domain
          'images.unsplash.com', // You can add more domains here
        ],
      },
};

export default nextConfig;
