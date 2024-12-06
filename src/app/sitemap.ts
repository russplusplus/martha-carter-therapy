import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `https://${process.env.NEXT_PUBLIC_BASE_URL}`
        },
        {
            url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/somatic-therapist-denver`
        },
        {
            url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/trauma-therapy-colorado`
        },
        {
            url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/therapy-in-colorado-springs`
        },
        {
            url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/faq`
        }
    ]
}