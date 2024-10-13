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
                        You have about a hundred Venmo requests you&apos;re too afraid to send, and although you desperately need alone time, you feel like it&apos;s not a “good enough” reason to cancel dinner with your friend.  
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph margin-b-s">
                        Every decision feels like mental gymnastics — you&apos;re doing so many mental flips you might as well be Simone Biles.  
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph margin-b-s">
                        You&apos;re making yourself small in subtle ways, but it&apos;s not feeling subtle anymore.  
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph margin-b-s">
                        You&apos;re ready to shed self-imposed limits and be your true self.  
                    </p>
                </FadeInOnScroll>
            </div>
        </div>
    )
}