"use client"

import { useState, useRef } from "react"
import { Lavender } from "./Lavender"
import { CallToAction } from "./CallToAction"

export function FAQ() {

    const [q1Breaks, setQ1Breaks] = useState(0)

    const a1Ref = useRef(null)

    return (
        <div id='faq-row-container' className='flex-h-center'>
            <div className="faq-column">

                <div className="faq-row">
                    <div id="q-container" className="cream">
                        <MultiBreak n={4} />

                        <Question breaks={10}>
                            What does a typical session look like?
                        </Question>
                    </div>
                    <div id="a-container" className="cream">
                        <MultiBreak n={4} />

                        <Answer breaks={2}>
                            Each session is devoted to your needs in that moment, which can vary from week to week. No
                            one session looks the same, and while we ultimately want to address your larger goals, we will
                            also stay flexible so we can tackle more urgent concerns that show up along the way. Your job is
                            to bring your authentic self and concerns, my job is to make sure the sessions are focused and
                            meet your short-term and long-term needs.
                        </Answer>    
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="cream">
                        <MultiBreak n={4} />

                        <Question breaks={6}>
                            What is somatic therapy?
                        </Question>
                    </div>
                    <div id="a-container" className="cream">
                        <MultiBreak n={4} />

                        <Answer breaks={6}>
                            Somatic therapy is ...
                        </Answer>
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="cream">

                        <Question breaks={6}>
                            Rates and insurance?
                        </Question>
                    </div>
                    <div id="a-container" className="cream">

                        <Answer breaks={2}>
                            I am currently taking United and Aetna insurance, and your copay varies depending on your
                            specific plan. Contact your insurance to find out the exact amount. Out-of-network sessions are
                            50 minutes, and cost $160/session.
                        </Answer>      
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="cream">
                        <Question breaks={8}>
                            Cancellation policy?
                        </Question>
                    </div>
                    <div id="a-container" className="cream">
                        <Answer breaks={2}>
                            Since I am reserving this time exclusively for you, a minimum of 72 hours notice is required for
                            rescheduling or cancellation of an appointment. If for any reason a session is cancelled less than
                            72 hours, you will be charged the full private pay fee. This fee is the same if you are using
                            insurance or not, as insurance does not cover cancelled sessions.
                        </Answer>     
                    </div>
                </div>
                <div className="faq-row">
                    <div id="q-container" className="cream">
                        <Question>
                            Lateness?
                        </Question>
                    </div>
                    <div id="a-container" className="cream">
                        <Answer breaks={2}>
                            Each session is allotted a specific time frame, therefore late arrivals will not receive an
                            extension of time for their schedule appointments, and the original reservation fee will be
                            charged.
                        </Answer>     
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
                <Lavender>
                    Q:
                </Lavender>
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
                <Lavender>
                    A:
                </Lavender>
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
    let breaks = []
    for (let i = 0; i < n; i++) {
        breaks.push(<br key={i}/>)
    }
    return <>{breaks}</>
}