import { FadeInOnScroll } from "./FadeInOnScroll"
import { CallToAction } from "./CallToAction"

export function MoreAbout() {
    return (
        <div className="bg-cream padding-t-s padding-b-s more-about-row-container">
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-l green prevent-select">
                    <h1 className="more-about bold">
                        Ready to get started?
                    </h1>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-s green prevent-select">
                    <p className="paragraph more-about">
                        Step 1 - Consult call
                    </p>
                </div>
                <div className="flex-h-center green prevent-select">
                    <p className="paragraph more-about">
                        If you think we’d be a good fit, you can schedule a 20 minute consultation with me to ask any questions you may still have. 
                        Please feel free to email me if you do not see a time that works for you on my calendar. 
                    </p>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-s green prevent-select">
                    <p className="paragraph more-about">
                        Step 2 - Therapy
                    </p>
                </div>
                <div className="flex-h-center green prevent-select">
                    <p className="paragraph more-about">
                        In sessions, we will work together to challenge old patterns and help you reclaim your life after trauma.
                    </p>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div className="flex-h-center margin-t-s green prevent-select">
                    <p className="paragraph more-about">
                        Step 3 - Transform your trauma into growth 
                    </p>
                </div>
                <div className="flex-h-center margin-b-l green prevent-select">
                    <p className="paragraph more-about">
                        Feel more connected to yourself, and discover a renewed sense of autonomy and agency in your life.  
                    </p>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <CallToAction className="margin-t-s green hover-lavender active-lavender"/>
            </FadeInOnScroll>
        </div>
    )
}