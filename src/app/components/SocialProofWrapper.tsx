"use client"

// import { SocialProof1 } from "./SocialProof"
import { FadeInOnScroll } from "./FadeInOnScroll"
import { useEffect, useState } from 'react'

const log = console.log.bind(console)

export function SocialProofWrapper({
    children
}:{
    children: React.ReactNode[]
}) {

    const [ index, setIndex ] = useState(0)

    // async function rotate() {
    //     log('in rotate')
    //     let rotationStartTime = Date.now()
        // while (true) {
        //     if (Date.now() - rotationStartTime >= 5000) {
        //         log('rotate')
        //         rotationStartTime = Date.now()
        //     }
        // }
        // do {
        //     setTimeout(() => {
        //         log('one second has passed')
        //     }, 1000)
        // } while (true)
    // }

    // useEffect(() => {
    //     log('children:', children)
    //     rotate()
    // }, [])
    
    return (
        <div className="bg-cream social-proof">
            <FadeInOnScroll>
                <div className="flex-h-center padding-t-s padding-b-l green bg-cream prevent-select ">
                    {children[1]}
                </div>
            </FadeInOnScroll>
        </div>
    )
}

