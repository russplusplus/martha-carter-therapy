import { FadeInOnScroll } from "./FadeInOnScroll"
import Image from "next/image"

export function WhoISee() {
    return (
        <div className='flex-h-center prevent-select' id='about-row-container'>
            <div id="about-container" className="cream">
                <FadeInOnScroll>
                    <h1 className='about-caption bold'>
                        Therapy Designed for People with Trauma
                    </h1>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        I work with clients via telehealth across Colorado. I am a trauma specialist and help adults with:
                    </p>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <ul className='paragraph about-caption'>
                        <li>Chronic Anxiety</li>
                        <li>People-Pleasing</li>
                        <li>Attachment Wounds</li>
                        <li>Childhood Trauma</li>
                        <li>PTSD</li>
                        <li>Emotional Abuse</li>
                        <li>Complex PTSD</li>
                        <li>Relational Trauma</li>
                    </ul>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <p className='paragraph about-caption '>
                        In other words, I work with people who have had less-than-ideal relationships with parents, partners, or others. 
                        The wounds created by these harmful relationships lead to ongoing relationship issues like not speaking up for 
                        yourself or trying to keep people around by prioritizing them at the expense of yourself. 
                    </p>
                </FadeInOnScroll>
                
            </div>
            <div id="snowshoe-container">
                <Image id='about-pic' src='/snowshoe4.jpg' width="2505" height="4032" alt="Martha Carter somatic therapist denver snowshoeing in a forest on a sunny winter day"></Image>
            </div>          
        </div>
    )
}