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
                        I work with clients via telehealth across Colorado. I am a trauma specialist and help adults with chronic anxiety, 
                        people-pleasing, attachment wounds, childhood trauma, PTSD, emotional abuse, complex PTSD, and relational trauma. 
                        In other words, I work with people who have had less-than-ideal relationships with parents, partners, or others. 
                        The wounds created by these harmful relationships lead to ongoing relationship issues like not speaking up for 
                        yourself or trying to keep people around by prioritizing them at the expense of yourself. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        When most people hear “trauma”, they may think of war tragedies or physical abuse, but there are other forms of 
                        trauma that are just as harmful. For example, complex trauma happens over a long period of time rather than over 
                        one clearly defined event, and tends to be emotional rather than physical. Due to the obscure nature of it, 
                        complex trauma often goes unrecognized or minimized, even by therapists. I am here to help those who have been 
                        overlooked or have fallen through the cracks of the mental health system because their trauma is harder to identify. 
                        If this is you, I see you, and I believe your pain is legitimate and enough. You deserve better. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        With more than five years of experience, I help clients resolve trauma symptoms — including feeling like you&apos;re 
                        a burden, emotional flashbacks, and struggling to ask for help. In our work together, I will help you feel more relaxed 
                        in your relationships, more secure in your wants and needs, and more willing to ask for help when you need it. 
                    </p>
                </FadeInOnScroll>







                {/* <FadeInOnScroll>
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
                </FadeInOnScroll> */}
            </div>
            <div id="snowshoe-container">
                <Image id='about-pic' src='/snowshoe7.jpg' width="554" height="739" alt="Martha Carter snowshoeing in a forest on a sunny winter day"></Image>
            </div>          
        </div>
    )
}