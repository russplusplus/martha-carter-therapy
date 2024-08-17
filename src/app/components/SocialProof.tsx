"use client"

import { FadeInOnScroll } from "./FadeInOnScroll"
import ScrollAnimation from 'react-animate-on-scroll';


export function SocialProof() {
  return (
    <>
    <div className="bg-cream social-proof">
      {/* <FadeInOnScroll> */}
      <ScrollAnimation animateIn="fadeIn" style={{"zIndex":0}}>
        <div className="flex-h-center padding-t-s padding-b-l green bg-cream prevent-select ">
          <h1>
            &quot;Martha is an insightful, warm, compassionate therapist with wisdom and wit that 
            invites vulnerability. I highly recomment her as a clinician and have loved working 
            with her in several different settings.&quot;<br/><br/> - Mikyla Young-Bayless, LMFT
          </h1>
        </div>
      {/* </FadeInOnScroll> */}
      {/* <svg width="" height="20" xmlns="http://www.w3.org/2000/svg">
        <rect width="2000" height="200" x="0" y="0" fill="blue" />
      </svg> */}
      </ScrollAnimation>
    </div>
    </>
  )
}