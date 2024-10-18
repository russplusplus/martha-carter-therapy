import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/somatic-therapist-denver`
        },
        // {
        //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/trauma-therapy-colorado`
        // }
    ]
}