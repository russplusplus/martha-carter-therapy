// useState only works in client component
"use client"

// const log = console.log.bind(console)

// log('we"re logging baby')

import { useState, useEffect, useRef } from 'react'
import Hamburger from 'hamburger-react'
import { useAppContext } from './AppContext'

export function Menu() {

    // const [isOpen, setOpen] = useState(false)
    let { 
        isMenuOpen, 
        setMenuOpen,
        isBookingModalOpen,
        setBookingModalOpen,
        isBookingStarted,
        setBookingStarted
    } = useAppContext()

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

    useEffect(() => {
        console.log('isMenuOpen:', isMenuOpen)
    }, [isMenuOpen])

    // useEffect(() => {
    //     aboutRef.current = document.getElementById("headshot-row-container")
    // }, [])

    return (
        <>
            <div id={isMenuOpen ? "menu-btn-open" : "menu-btn-closed"}>
                <Hamburger toggled={isMenuOpen} toggle={setMenuOpen}/>
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
            


        </>
    )
}