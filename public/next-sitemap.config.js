/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://noorbazar.vercel.app', // তোমার production URL
    generateRobotsTxt: true, // robots.txt auto generate হবে
    sitemapSize: 5000,
    changefreq: 'daily', // প্রতিদিন update হয় ধরে নেবে
    priority: 0.7,
    exclude: ['/admin/*', '/secret/*'], // private pages বাদ দিতে চাইলে
}
