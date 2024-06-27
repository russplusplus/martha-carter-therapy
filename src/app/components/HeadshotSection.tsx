
// import { useEffect } from "react"
import { Lavender } from "./Lavender"
import { FadeIn } from "./FadeIn"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const log = console.log.bind(console)

export function HeadshotSection() {

  return (
    <div className='flex-h-center' id='headshot-row-container'>
      <div id="headshot-container">
        <img id='headshot' src='headshot.jpg' width="3024" height="4032"></img>
      </div>
      
      <div id="headshot-caption-container" className="cream">
        <FadeIn>
          <p className='paragraph headshot-caption'>
              You've spent your life making sure everyone else is okay, subtly ensuring everyone is
              comfortable from behind the scenes, but you're <Lavender>exhausted</Lavender> and starting to wonder who you
              even are.
          </p>
        </FadeIn>
        <FadeIn>
          <p className='paragraph headshot-caption'>
            You're doing your best; you've been through a lot and you've managed to stay <Lavender>afloat</Lavender>,
            doing what you need to do, and maybe even seeming like you have it all together but on the
            inside you feel like that is far from the truth.
          </p>
        </FadeIn>
        <FadeIn>
          <p className='paragraph headshot-caption'>
            Because truth be told, you feel anxious, self-
            critical, stuck, and <Lavender>lost</Lavender> because you're not even sure what makes you happy anymore. 
          </p>
        </FadeIn>
        <FadeIn>
          <p className='paragraph headshot-caption'>
            But that isn't enough for you- you're ready to stop <Lavender>surviving</Lavender> and start thriving.
          </p>
        </FadeIn>
        <FadeIn>
          <p className='paragraph headshot-caption'>
            You want to feel as connected to yourself as you are to other people and their 
            needs, and start living life for <Lavender>yourself</Lavender>.
          </p>
        </FadeIn>
      </div>          
    </div>
  )
}