
import { BookBtn } from "./BookBtn"
import { FadeInOnScroll } from "./FadeInOnScroll"
import "animate.css/animate.compat.css"
import Image from "next/image"
import { NavBtn } from "./NavBtn"

export function WhoISee2() {
  return (
    <div className='flex-h-center prevent-select padding-b-l' id='whoisee2-row-container'>
      <div id="kyoto-container">
        <Image id='headshot' src='/kyoto.jpg' width="3024" height="4032" alt="Martha Carter Therapy Somatic Therapist Denver Colorado Headshot"></Image>
      </div>
      <div id="whoisee2-caption-container" className="green">
        <FadeInOnScroll>
            <p className='paragraph about-caption '>
                When most people hear “trauma”, they may think of war tragedies or physical abuse, but there are other forms of 
                trauma that are just as harmful. For example, complex trauma happens over a long period of time rather than over 
                one clearly defined event, and tends to be emotional rather than physical. Due to the obscure nature of it, 
                complex trauma often goes unrecognized or minimized, even by therapists. 
                </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
            <p className='paragraph about-caption '>
                I am here to help those who have been 
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
        <FadeInOnScroll>
          <NavBtn className="headshot-caption hover-lavender margin-t-l" label="Learn more about me ►" href="/somatic-therapist-denver"/>
          <BookBtn className="headshot-caption margin-t-s hover-lavender active-sage"/>
        </FadeInOnScroll>
      </div>          
    </div>
  )
}