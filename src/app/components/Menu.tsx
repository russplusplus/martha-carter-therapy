"use client"

const log = console.log.bind(console)

import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useAppContext } from './AppContext'
import { browserName } from 'react-device-detect';

const rowClass = browserName === "Safari" ? "menu-row-safari" : "menu-row"

export function Menu() {

    const { 
        isMenuOpen, 
        setMenuOpen,
        setBookingModalOpen,
    } = useAppContext()

    const [ menuHover, setMenuHover ] = useState(false)

    function scrollToAboutYou() {
        document?.getElementById("about-you-row-container")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    function scrollToAboutMe() {
        document?.getElementById("headshot-row-container")?.scrollIntoView({
            behavior: "smooth"
        })
    }

    function scrollToWhoISee() {
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
                    <h2 className={rowClass}>
                        <a href="https://martha-carter.clientsecure.me/" target="_blank">
                            Book a free consultation
                        </a>
                    </h2>
                    <h2 className={rowClass} onClick={() => setBookingModalOpen(true)}>
                        Get in touch
                    </h2>
                    <h2 className={rowClass} onClick={scrollToAboutYou}>
                        About you
                    </h2>
                    <h2 className={rowClass} onClick={scrollToAboutMe}>
                        About me
                    </h2>
                    <h2 className={rowClass} onClick={scrollToWhoISee}>
                        Who I see
                    </h2>
                    <h2 className={rowClass} onClick={scrollToFAQ}>
                        FAQs
                    </h2>
                </div>
            }
        </div>
    )
}