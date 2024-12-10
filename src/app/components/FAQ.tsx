import { FadeInOnScroll } from "./FadeInOnScroll"

export function FAQ() {

    return (
        <div id='faq-row-container' className='flex-h-center padding-b-l green bg-lavender prevent-select'>
            <div className="faq-column">
                <div className="faq-row">
                    <div id="q-container" className="green">
                        <MultiBreak n={4} />
                        <FadeInOnScroll>
                            <Question breaks={3}>
                                What is your rate?
                            </Question>
                        </FadeInOnScroll>
                    </div>
                    <div id="a-container" className="green">
                        <MultiBreak n={4} />
                        <FadeInOnScroll>
                            <Answer breaks={3}>
                                $200 / 50-minute session
                            </Answer>    
                        </FadeInOnScroll>
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="green">
                        <FadeInOnScroll>
                            <Question breaks={3}>
                                Do you take insurance?
                            </Question>
                        </FadeInOnScroll>
                    </div>
                    <div id="a-container" className="green">
                        <FadeInOnScroll>
                            <Answer breaks={3}>
                                Like most specialists, I do not accept insurance. If you would like to use your out-of-network benefits, I can provide you with a superbill. You will need to contact your insurance to see if you have out-of-network benefits.
                            </Answer>
                        </FadeInOnScroll>
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="green">
                        <FadeInOnScroll>
                            <Question breaks={6}>
                                What is your therapeutic approach?
                            </Question>
                        </FadeInOnScroll>
                    </div>
                    <div id="a-container" className="green">
                        <FadeInOnScroll>
                            <Answer breaks={3}>
                                I approach therapy from a trauma-informed, nonjudgmental, attachment-based lens. 
                                I am trained in Post-Traumatic Growth and have a special interest in polyvagal 
                                theory and neurobiology. I primarily use somatic(body-centered) techniques in 
                                sessions because they have had the most profound and lasting impact on my clients. 
                                Outside of sessions, I regularly attend individual and group supervision in order 
                                to continue growing my clinical skills and be as effective as possible. 
                            </Answer> 
                        </FadeInOnScroll>     
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="green">
                        <FadeInOnScroll>
                            <Question breaks={0}>
                                How does online therapy work?
                            </Question>
                        </FadeInOnScroll>     
                    </div>
                    <div id="a-container" className="green">
                        <FadeInOnScroll>
                            <Answer breaks={3}>
                                I use secure, HIPAA-compliant tele-health called SimplePractice to facilitate each appointment.
                                You will receive a link before each session.
                            </Answer>  
                        </FadeInOnScroll>        
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="green">
                        <FadeInOnScroll>
                            <Question>
                                What can I expect from my first session?
                            </Question>
                        </FadeInOnScroll>        
                    </div>
                    <div id="a-container" className="green">
                        <FadeInOnScroll>
                            <Answer breaks={3}>
                                During the free consultation you can ask any questions you may have,
                                we will discuss what your goals are, and if and how they align with my offerings.
                                During the initial appointment, we will determine clear goals and start the foundational work to regulate your nervous system. 
                            </Answer>   
                        </FadeInOnScroll>          
                    </div>     
                </div>
                <div className="faq-row">
                    <div id="q-container" className="green">
                        <FadeInOnScroll>
                            <Question>
                                What is your cancellation policy?
                            </Question>
                        </FadeInOnScroll>        
                    </div>
                    <div id="a-container" className="green">
                        <FadeInOnScroll>
                            <Answer breaks={3}>
                                Since I am reserving this time exclusively for you, a minimum of 72 hours
                                notice is required for rescheduling or cancellation of an appointment.
                                If for any reason a session is cancelled less than 72 hours, you will be 
                                charged the full private pay fee.
                            </Answer>   
                        </FadeInOnScroll>          
                    </div>     
                </div>
                <div className="faq-row">
                    <div id="q-container" className="green">
                        <FadeInOnScroll>
                            <Question>
                                How do you handle lateness? 
                            </Question>
                        </FadeInOnScroll>        
                    </div>
                    <div id="a-container" className="green">
                        <FadeInOnScroll>
                            <Answer breaks={4}>
                                Each session is allotted a specific time frame, therefore late arrivals will not receive 
                                an extension of time for their scheduled appointments, and the original reservation fee will be charged.
                            </Answer>   
                        </FadeInOnScroll>          
                    </div>     
                </div>
            </div>     
        </div>
    )
}

function Question(
    { children, breaks }
    :
    { children: string, breaks?: number }
) {
    return (
        <>
            <p className='paragraph'>
                Q:
            </p>    
            <p className='paragraph'>
                {children}
                <MultiBreak n={breaks ?? 0} />
            </p>    
        </>
    )
}

function Answer(
    { children, breaks }
    :
    { children: string, breaks?: number }
) {
    return (
        <>
            <p className='paragraph FAQ'>
                A:
            </p>    
            <p className='paragraph FAQ '>
                {children}
                <MultiBreak n={breaks ?? 0} />
            </p>    
        </>
    )
}

function MultiBreak(
    { n }
    :
    { n: number }
) {
    const breaks = []
    for (let i = 0; i < n; i++) {
        breaks.push(<br key={i}/>)
    }
    return <>{breaks}</>
}