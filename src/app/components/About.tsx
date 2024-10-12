import { Lavender } from "./Lavender"
import { FadeInOnScroll } from "./FadeInOnScroll"
import { CallToAction } from "./CallToAction"
import Image from "next/image"

export function About() {
    return (
        <div className='flex-h-center prevent-select' id='about-row-container'>
            <div id="about-container" className="cream">
                <FadeInOnScroll>
                    <h1 className='about-caption bold'>
                        Who I see
                    </h1>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        I work with clients via telehealth across the state of Colorado. I am a trauma specialist and help adults with chronic anxiety, 
                        people-pleasing, childhood trauma, PTSD, emotional abuse, complex PTSD, and relational trauma.
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        With more than five years of experience, I help clients resolve trauma symptoms and build a more easeful life by prioritizing 
                        what is most beneficial to the nervous system during sessions.
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        In working with me, clients feel calmer, more connected to themselves, and more engaged with their lives.
                    </p>
                </FadeInOnScroll>
            </div>
            <div id="snowshoe-container">
                <Image id='about-pic' src='/snowshoe.jpg' width="554" height="739" alt="Martha Carter snowshoeing in a forest on a sunny winter day"></Image>
            </div>          
        </div>
    )
}