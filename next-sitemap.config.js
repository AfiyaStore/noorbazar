/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://noorbazar.vercel.app',
    generateRobotsTxt: true, // important
    changefreq: 'daily',
    priority: 0.7,
    outDir: './public', // যেহেতু Vercel public serve করে
};