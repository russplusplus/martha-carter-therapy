import { FadeInOnScroll } from "./FadeInOnScroll"

export function AboutYou() {
    return (
        <div className="flex-h-center margin-t-l padding-b-l prevent-select bg-cream flex-h-center" id="about-you-row-container">
            <div id="about-you-container" className="green margin-t-l ">
                <FadeInOnScroll>
                    <p className="paragraph about-you margin-b-s text-align-center">
                        You're tired of feeling trapped in your own mind.
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph about-you margin-b-s">
                        You've spent your life making sure everyone else is okay,<br/> ensuring everyone is comfortable from behind the scenes,<br/>meanwhile you feel alone and exhausted. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph about-you margin-b-s">
                        You feel lost in other people’s lives and are starting to wonder<br/>who you are beyond taking care of others. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph about-you margin-b-s">
                        While you are good at holding it all together on the outside,<br/>you feel anxious, self-critical, and stuck on the inside. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className="paragraph about-you margin-b-s">
                        But that isn't cutting it- you want to feel as connected to yourself<br/>as you are to other people and their needs,<br/>and are ready to start living for yourself.
                    </p>
                </FadeInOnScroll>
            </div>
        </div>
    )
}