import { FadeInOnScroll } from "./FadeInOnScroll"

export function MoreAbout() {
    return (
        <div className="bg-cream padding-t-s padding-b-s more-about-row-container">
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-l green prevent-select">
                    <p className="paragraph more-about bold">
                        Ready to get started?
                    </p>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-s green prevent-select">
                    <p className="paragraph more-about">
                        Step 1- Consult call: Think we’re a fit? You can schedule a 20 minute consultation with me 
                        to ask any questions you might still have. If you do not see a time that works for you on my 
                        calendar, you can email me to set up a time that does.
                    </p>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-s green prevent-select">
                    <p className="paragraph more-about">
                        Step 2- Therapy: During sessions, we will work together to challenge old patterns and reclaim your life after trauma.
                    </p>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-s margin-b-l green prevent-select">
                    <p className="paragraph more-about">
                        Step 3- Transform your trauma into growth: Feel more connected to yourself, and discover a renewed sense of autonomy and agency in your life. 
                    </p>
                </div>
            </FadeInOnScroll>
        </div>
    )
}