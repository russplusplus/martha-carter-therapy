import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin"]
            }
        ],
        sitemap: `https://www.${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    }
}