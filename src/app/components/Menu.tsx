// useState only works in client component
"use client"

const log = console.log.bind(console)

import { useState, useEffect, useRef } from 'react'
import Hamburger from 'hamburger-react'
import { useAppContext } from './AppContext'

export function Menu() {

    const { 
        isMenuOpen, 
        setMenuOpen,
        setBookingModalOpen,
    } = useAppContext()

    const [ menuHover, setMenuHover ] = useState(false)

    function scrollToIntro() {
        document?.getElementById("headshot-row-container")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    function scrollToAbout() {
        document?.getElementById("about-row-container")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    function scrollToFAQ() {
        document?.getElementById("faq-row-container")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div id="menu-container">
            <div id={isMenuOpen ? "menu-btn-open" : "menu-btn-closed"}
                onClick={() => {
                    log("hamburger click")
                    setMenuOpen(!isMenuOpen)
                } }
                onMouseOver={() => setMenuHover(true)}
                onMouseOut={() => setMenuHover(false)}>
                <Hamburger toggled={isMenuOpen} size={menuHover ? 38 : 32}/>
            </div>
            {isMenuOpen && 
                <div id="menu">
                    <h2 className="menu-row" onClick={() => setBookingModalOpen(true)}>
                        Book a free consultation
                    </h2>
                    <h2 className="menu-row" onClick={scrollToIntro}>
                        Intro
                    </h2>
                    <h2 className="menu-row" onClick={scrollToAbout}>
                        About me
                    </h2>
                    <h2 className="menu-row" onClick={scrollToFAQ}>
                        FAQs
                    </h2>
                    
                </div>
            }
            


        </div>
    )
}