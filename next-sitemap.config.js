
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.rspoddar.org",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/privacy-policy", "/terms-and-conditions"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy-policy", "/terms-and-conditions"],
      },
    ],
  },
};