import { Lavender } from "./Lavender"
import { FadeInOnScroll } from "./FadeInOnScroll"
import { CallToAction } from "./CallToAction"

export function About() {
    return (
        <div className='flex-h-center prevent-select' id='about-row-container'>
            <div id="about-container" className="cream">
                <FadeInOnScroll>
                    <p className='paragraph about-caption bold'>
                        Who I see
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        I see clients via tele-health across the state of Colorado. I am a trauma specialist and help adults 
                        with chronic anxiety, people pleasing, childhood trauma, PTSD, emotional abuse, complex PTSD, and 
                        relational trauma. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        With more than 5 years of experience, I help clients to resolve their symptoms and build a more regulated 
                        and easeful life by prioritizing what is most in-service of their nervous systems during sessions. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        Through working with me, clients feel calmer, more connected with themselves, and more engaged with their lives. 
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <CallToAction className="margin-t-s margin-b-s"/>
                </FadeInOnScroll>
            </div>
            <div id="snowshoe-container">
                <img id='about-pic' src='snowshoe.jpg' width="554" height="739"></img>
              
            </div>          
        </div>
    )
}