
import { Lavender } from "./Lavender"
import { FadeInOnScroll } from "./FadeInOnScroll"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const log = console.log.bind(console)

export function HeadshotSection() {

  return (
    <>
      {/* <hr id="thicc-line"/> */}
      <div className='flex-h-center prevent-select padding-b-l' id='headshot-row-container'>
        <div id="headshot-container">
          <img id='headshot' src='headshot2.jpg' width="3024" height="4032"></img>
        </div>
        
        <div id="headshot-caption-container" className="cream">
          <FadeInOnScroll>
            <h1 className='bold headshot-caption'>
              Hi, I&apos;m Martha!
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              I am a trauma therapist, and I fill in the gaps created by talk therapy by using a somatic 
              (body-centered) approach. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              If you feel like therapy has gotten dull, you have a deep 
              understanding of your issues but still feel stuck, or have ever said something along 
              the lines of “I understand that in my head, but I can&apos;t feel it”, it might be time to 
              try a somatic approach. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              Through somatic techniques, we can help your body feel the same 
              way your mind does. Together, we will transform toxic shame into confidence, people 
              pleasing into saying yes when you want to, and self-doubt into self-assuredness. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              After working with me, you will feel more alive and like yourself, connected to your true 
              longings, sure of your strengths, and naturally calmer.  
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              I am a passionate and fun-loving therapist and will give you honesty, direct feedback, 
              and a safe place to land as we navigate the impact of trauma together. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              After working with me, you will feel more alive and like yourself, connected to your true 
              longings, sure of your strengths, and naturally calmer.  
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              Ready to uncover your natural resilience? 
              Schedule a free, no-commitment consultation to begin your transformative journey and come back home to yourself. 
              If you don&apos;t see a time that works for you in my calendar, email me to find a time that does. 
            </p>
          </FadeInOnScroll>
        </div>          
      </div>
    </>
  )
}