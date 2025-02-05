// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: "/steve-jobs-ecommerce-app",
//   output: "export",  // <=== enables static exports
//   reactStrictMode: true,
// };

// export default nextConfig;


/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
  // output: 'export', // commented out as suggested by Copilot Chat
  basePath: "/steve-jobs-ecommerce-app",
  assetPrefix: "/steve-jobs-ecommerce-app/",
  reactStrictMode: true,

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

// module.exports = nextConfig
export default nextConfig;