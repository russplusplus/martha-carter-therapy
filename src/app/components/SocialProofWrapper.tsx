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
    const [ fadeType, setFadeType ] = useState('fade-in')

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

    function rotate(i: number) {
        setTimeout(() => {
            setFadeType('fade-out')
            setTimeout(() => {
                setIndex(i + 1)
                rotate(i + 1)
                setFadeType('fade-in')
            }, 1000)
        }, 10000)
    }

    // useEffect(() => {
    //     log('index:', index)
    // }, [index])

    useEffect(() => {
        log('mounted')
        rotate(0)
    }, [])
    
    return (
        <div className="bg-cream padding-t-l social-proof">
            <FadeInOnScroll>
                <div className={fadeType + " flex-h-center green bg-cream prevent-select "}>
                    {children[index % children.length]}
                </div>
            </FadeInOnScroll>
        </div>
    )
}

