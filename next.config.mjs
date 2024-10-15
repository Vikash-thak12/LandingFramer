/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'pbs.twimage.com',  // Add this domain
          'upload.wikimedia.org',  // Example of another domain
          'example.com', // You can add more domains here
        ],
      },
};

export default nextConfig;
