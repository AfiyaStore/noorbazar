import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://noorbazar.vercel.app',
            lastModified: new Date(),
        },
        {
            url: 'https://noorbazar.vercel.app/en',
            lastModified: new Date(),
        },
        {
            url: 'https://noorbazar.vercel.app/bn',
            lastModified: new Date(),
        },
    ]
}
