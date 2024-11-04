"use client"

import { FadeInOnScroll } from "./FadeInOnScroll"
import { useEffect, useState } from 'react'
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

const log = console.log.bind(console)

export function SocialProofWrapper({
    children
}:{
    children: React.ReactNode[]
}) {
    const [ index, setIndex ] = useState(0)
    const [ fadeType, setFadeType ] = useState('fade-in')

    useEffect(() => {
        log('index:', index)
    }, [index])

    function next() {
        setFadeType('fade-out')
        setTimeout(() => {
            const i = index + 1
            setIndex(i)
            setFadeType('fade-in')
        }, 500)
    }

    function previous() {
        setFadeType('fade-out')
        setTimeout(() => {
            const i = index - 1
            setIndex(i)
            setFadeType('fade-in')
        }, 500)
    }
    
    return (
        <div className="bg-cream padding-t-l padding-b-xl social-proof-row-container">
            <div className="social-proof-next-btn-container">
                <button className="social-proof-next-btn" onClick={previous}>
                    <IoChevronBack />
                </button>
            </div>
            <FadeInOnScroll>
                <div className={fadeType + " flex-h-center green bg-cream prevent-select "}>
                    {children[Math.abs(index % children.length)]}
                </div>
            </FadeInOnScroll>
            <div className="social-proof-next-btn-container">
                <button className="social-proof-next-btn" onClick={next}>
                    <IoChevronForward />
                </button>
            </div>
        </div>
    )
}
