import { FadeInOnScroll } from "./FadeInOnScroll"

export function MoreAbout() {
    return (
        <>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-l cream">
                    <p className="paragraph more-about">
                        As a Licensed Clinical Social Worker, I work with adults with a variety of concerns, including
                        chronic anxiety, people pleasing, disordered eating, and childhood trauma, with a special
                        passion for adults raised by emotionally immature or abusive parents. With more than 5 years
                        of experience, I work with clients to help resolve their symptoms and build a more regulated
                        and easeful life.
                    </p>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-s cream">
                    <p className="paragraph more-about">
                        I approach therapy from a trauma-informed, nonjudgmental, attachment-based lens. I am
                        trained in post-traumatic growth, so I am oriented to help clients capitalize on their own
                        resilience and strengths.
                    </p>
                </div>
            </FadeInOnScroll>
        </>
    )
}