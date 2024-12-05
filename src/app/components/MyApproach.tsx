
import { BookBtn } from "./BookBtn"
import { FadeInOnScroll } from "./FadeInOnScroll"
import "animate.css/animate.compat.css"
import Image from "next/image"
import { NavBtn } from "./NavBtn"

export function MyApproach() {
  return (
    <div className='flex-h-center prevent-select padding-b-l' id='approach-row-container'>
      <div id="kyoto-container">
        <Image id='headshot' src='/kyoto.jpg' width="3024" height="4032" alt="Martha Carter Therapy Somatic Therapist Denver Colorado Headshot"></Image>
      </div>
      <div id="approach-caption-container" className="green">
        <FadeInOnScroll>
          <h1 className='bold headshot-caption'>
            Somatic Therapy for Complex Trauma, PTSD, Self-Esteem, and Chronic Anxiety 
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className='paragraph headshot-caption'>
            I use a somatic approach, but what the heck is that? You may have heard this phrase thrown around the internet quite a bit recently. 
            Allow me to elaborate — somatic therapy focuses on feeling things rather than talking about them. Somatic therapy is unique because 
            it allows us to capitalize on our nervous system&apos;s natural anatomy. As humans, the majority of our nervous system communicates from body to brain, 
            not brain to body… which is why it&apos;s so hard to think our way out of feeling anxious (and why talk therapy has its limits).
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className='paragraph headshot-caption'>
            My approach is also relational at heart because most of my clients have relational trauma, meaning they have been harmed by relationships — 
            like absent parents or emotionally abusive partners. Since their wounds are relational, I believe deep healing requires healing within relationships, 
            including the therapeutic relationship. Whatever struggles you deal with in your life will most certainly show up in therapy. If you have not been truly 
            seen or understood by people in your life, you will feel missed and misunderstood by your therapist. If you struggle to ask for help and are used to doing 
            everything on your own, you will struggle to ask your therapist for help. If you tend to people-please, you will also find yourself trying to please your therapist. 
            This is why we must address these old wounds as they show up in the present between us, too. This is how necessary change happens. 
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <p className='paragraph headshot-caption'>
            I am not a robotic, blank-slate therapist, and I certainly can&apos;t hold in my “professional opinion,” especially while watching reality TV. 
            Friends and past clients say I am “chaotic good” and “antagonizing in a good way”, I like to think it&apos;s because I lead with my heart, while still being direct and playful. 
            I don&apos;t hide my humanness from clients, which means I cry and laugh with them, and relate to them on a real, human-to-human level. 
            I don&apos;t believe I have all the answers for my clients. I see us as a team exploring what is most right for and important to them — not to me, and not to anyone else. 
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