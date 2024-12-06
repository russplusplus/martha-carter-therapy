"use client"

const log = console.log.bind(console)

import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useAppContext } from './AppContext'
import { browserName } from 'react-device-detect';
import Link from 'next/link'

const rowClass = browserName === "Safari" ? "menu-row-safari" : "menu-row"

export function MobileMenu() {

    const { 
        isMenuOpen, 
        setMenuOpen,
        setBookingModalOpen,
    } = useAppContext()

    const [ menuHover, setMenuHover ] = useState(false)

    return (
        <div id="menu-container">
            <div id={isMenuOpen ? "menu-btn-open" : "menu-btn-closed"}
                onClick={() => {
                    log("hamburger click")
                    setMenuOpen(!isMenuOpen)
                } }
                onMouseOver={() => setMenuHover(true)}
                onMouseOut={() => setMenuHover(false)}>
                <Hamburger toggled={isMenuOpen} size={menuHover ? 38 : 32} label="menu"/>
            </div>
            {isMenuOpen && 
                <div id="menu">
                    <Link href="/">
                        <h2 className={rowClass} >
                            Home
                        </h2>
                    </Link>
                    <Link href="/somatic-therapist-denver">
                        <h2 className={rowClass} >
                            About Me
                        </h2>
                    </Link>
                    <Link href="/trauma-therapy-colorado">
                        <h2 className={rowClass} >
                            Who I See
                        </h2>
                    </Link>
                    <Link href="/therapy-in-colorado-springs">
                        <h2 className={rowClass} >
                            My Approach
                        </h2>
                    </Link>
                    <Link href="/faq">
                        <h2 className={rowClass} >
                            FAQ
                        </h2>
                    </Link>
                    <h2 className={rowClass} onClick={() => setBookingModalOpen(true)}>
                        Get in Touch
                    </h2>
                    <a href="https://martha-carter.clientsecure.me/" target="_blank">
                        <h2 className={rowClass}>
                            Book a Free Consultation
                        </h2>
                    </a>
                </div>
            }
        </div>
    )
}