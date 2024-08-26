import { FadeInOnScroll } from "./FadeInOnScroll"

export function AboutYou() {
    return (
        <div className="flex-h-center padding-t-s padding-b-l prevent-select bg-cream" id="about-you-row-container">
            <div id="about-you-container" className="green margin-t-l ">
                <FadeInOnScroll>
                    <h1 className="bold margin-b-s">
                        You&apos;re tired of feeling trapped in your own mind.
                    </h1>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph margin-b-s">
                        You&apos;ve spent your life making sure everyone else is okay, ensuring everyone is comfortable from behind the scenes. Meanwhile, you feel alone and exhausted. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph margin-b-s">
                        You feel lost in other&apos;s lives and are starting to wonder who you are beyond being a caregiver. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph margin-b-s">
                        You&apos;re good at holding it together on the outside. But internally, you feel anxious, self-critical, and stuck. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph margin-b-s">
                        You want to feel as connected to yourself as you are to other people and their needs.
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <h1 className="bold margin-b-s">
                        You&apos;re ready to start living for yourself.
                    </h1>
                </FadeInOnScroll>
            </div>
        </div>
    )
}