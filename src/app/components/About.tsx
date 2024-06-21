import { Lavender } from "./Lavender"
import { CallToAction } from "./CallToAction"

export function About() {
    return (
        <div className='flex-h-center' id='about-row-container'>
            <div id="about-container" className="cream">
                <p className='paragraph about-caption '>
                    Hi, I’m Martha
                </p>
                <p className='paragraph about-caption '>
                    I’m an anxious people pleaser and survivor of emotional trauma. Like you, I am all too familiar
                    with not wanting to give up my caring nature, but being tired of losing myself in the process.
                    I know you feel like your value comes from what you offer to others, but I am here to tell you
                    that your worth goes far beyond that. You have unique strengths, and they aren’t all connected
                    to how much care you show others.
                </p>
                <p className='paragraph about-caption '>
                    Through somatic (body-focused) therapy sessions, you can turn your trauma and anxiety into
                    superpowers. Together, we will transform your toxic shame into confidence, people pleasing
                    into only saying yes when you want to, and self-doubt into self-assuredness. By using a somatic
                    approach, you can feel calmer without having to try so hard to get there (aka you won’t have to
                    constantly deep breath to keep a panic attack at bay).
                </p>
                <p className='paragraph about-caption '>
                    And the best part? You don’t have to talk about the worst things that happened to you in the
                    process. Traditional talk therapy encourages people to talk about their trauma, but somatic
                    therapy allows you to shift your nervous system into a calmer state without sharing your
                    darkest stories.
                </p>
                <p className='paragraph about-caption '>
                    As a result, you’ll no longer feel the need to prove yourself to others, and can finally let go of
                    your habit of reading into social interactions and people’s body language, or doing emotional
                    labor for everyone and their brother out of fear people will leave if you don’t. You will feel
                    more like yourself, connected to your true longings, sure of your strengths and worth, and
                    naturally calm.
                </p>
                <p className='paragraph about-caption '>
                    Ready to uncover your hidden superpowers from your anxiety and trauma?
                    Schedule a free, no-commitment consultation to begin your transformative journey and come
                    back home to yourself.
                </p>
                <CallToAction className="margin-t-s margin-b-s"/>
                
            </div>
            <div id="snowshoe-container">
                <img id='about-pic' src='snowshoe.jpg' width="554" height="739"></img>
              
            </div>          
        </div>
    )
}