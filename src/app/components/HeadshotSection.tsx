
import { CallToAction } from "./CallToAction"
import { FadeInOnScroll } from "./FadeInOnScroll"
import "animate.css/animate.compat.css"
import Image from "next/image"

const log = console.log.bind(console)

export function HeadshotSection() {

  return (
    <>
      {/* <hr id="thicc-line"/> */}
      <div className='flex-h-center prevent-select padding-b-l' id='headshot-row-container'>
        <div id="headshot-container">
          <Image id='headshot' src='/headshot.jpg' width="3024" height="4032" alt="Martha Carter Therapy Somatic Therapist Denver Colorado Headshot"></Image>
        </div>
        
        <div id="headshot-caption-container" className="cream">
          <FadeInOnScroll>
            <h1 className='bold headshot-caption'>
              Hi, I&apos;m Martha!
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              I am a trauma therapist who gets it. I&apos;ve been there — overwhelmed by the mere idea of saying no, 
              and freezing up every time I try to share my opinion because that might make me less likable. 
              I know the value of FINALLY being comfortable in my skin, so there&apos;s nothing I love more than 
              helping people do the same. I fill in the gaps of talk therapy by using a somatic (body-centered) 
              approach that creates deep and lasting change. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className='paragraph headshot-caption'>
              If you feel that:
              <br/>
              <br/>
              <ul>
                <li>Therapy has become dull</li>
                <li>You have extensive insight about your issues and are still feeling stuck</li>
                <li>You understand something on an intellectual level, but don&apos;t actually feel it</li>
              </ul>
              <br/>
              ... it may be time to explore a somatic approach. 
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              Through somatic techniques, you can confidently send those Venmo requests without feeling guilty, 
              and cancel plans without feeling like your heart is going to jump out of your chest.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              Many of my clients have done the talk therapy thing for years, but their “breakthroughs” are getting 
              few and far between. As a somatic therapist, I offer something different. Instead of talking your way 
              through tired patterns and regurgitating the same old sh*t, I&apos;ll help you release those unhelpful 
              reflexes that live deep in your body so your authentic values can take the wheel. Together, we will 
              make living authentically feel comfortable and natural — from the inside, out. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              After working with me, I want you to stand in your true power — to say no without over-apologizing, 
              feel comfortable not laughing when a joke isn&apos;t funny, and check in with yourself before compulsively 
              checking on others.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption bold'>
              Ready to feel like yourself again?
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              Schedule a free, no-commitment consultation to begin your life-changing journey. If you don&apos;t see a time 
              that works for you in my calendar, please reach out via email and we will find a time that does!
            </p>
          </FadeInOnScroll>





{/* 
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              I am a trauma therapist, and I fill in the gaps created by talk therapy by using a somatic 
              (body-centered) approach. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className='paragraph headshot-caption'>
              If you feel that:
              <br/>
              <br/>
              <ul>
                <li>Therapy has become dull</li>
                <li>You have extensive insight about your issues and are still feeling stuck</li>
                <li>You understand something on an intellectual level, but don&apos;t actually feel it</li>
              </ul>
              <br/>
              ... it may be time to explore a somatic approach. 
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              Through somatic techniques, we can help your body feel the same way your mind does. 
              Together, we will transform toxic shame into confidence, people-pleasing tendencies into saying 
              “yes” when you want to, and shift self-doubt into self-assuredness.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              I am a passionate and fun-loving therapist who offers honesty, humor, direct feedback, 
              and a safe place to land as we navigate the impact of trauma together. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              After working with me, you will feel more alive, connected to your true longings, 
              confident in your strengths, naturally calmer, and most importantly—more like yourself. 
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='bold paragraph headshot-caption'>
              Ready to uncover your natural resilience?
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className='paragraph headshot-caption'>
              Schedule a free, no-commitment consultation to begin your transformative journey and come back home to yourself. 
              If you don&apos;t see a time that works for you in my calendar, please reach out via email and we will find a time that does!
            </p>
          </FadeInOnScroll> */}
          <FadeInOnScroll>
            <CallToAction className="headshot-caption margin-t-s hover-sage active-sage"/>
          </FadeInOnScroll>
        </div>          
      </div>
    </>
  )
}