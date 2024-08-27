"use client"

// import { SocialProof1 } from "./SocialProof"
import { FadeInOnScroll } from "./FadeInOnScroll"
import { useEffect, useState } from 'react'
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { TbUvIndex } from "react-icons/tb"

const log = console.log.bind(console)

export function SocialProofWrapper({
    children
}:{
    children: React.ReactNode[]
}) {

    const [ index, setIndex ] = useState(0)
    const [ fadeType, setFadeType ] = useState('fade-in')

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
    //     log('mounted')
    //     rotate(0)
    // }, [])

    useEffect(() => {
        log('index:', index)
    }, [index])

    function next() {
        setFadeType('fade-out')
        setTimeout(() => {
            let i = index + 1
            setIndex(i)
            setFadeType('fade-in')
        }, 500)
    }

    function previous() {
        setFadeType('fade-out')
        setTimeout(() => {
            let i = index - 1
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

