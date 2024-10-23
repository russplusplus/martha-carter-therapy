import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/somatic-therapist-denver`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/trauma-therapy-colorado`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/faq`
        }
    ]
}