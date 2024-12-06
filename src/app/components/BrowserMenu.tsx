"use client"

const log = console.log.bind(console)

import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useAppContext } from './AppContext'
import { browserName } from 'react-device-detect';
import Link from 'next/link'

const rowClass = browserName === "Safari" ? "menu-row-safari" : "menu-row"

export function BrowserMenu() {

    const { 
        isMenuOpen, 
        setMenuOpen,
        setBookingModalOpen,
    } = useAppContext()

    const [ menuHover, setMenuHover ] = useState(false)

    return (
        <div id="menu-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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
                <div id="browser-menu">
                    <Link href="https://www.instagram.com/therapy.with.martha" target="_blank" aria-label="somatic therapist denver instagram"><i className="fa fa-instagram" id="ig-icon-browser"></i></Link>
                    <Link href="mailto: marthacartertherapy@gmail.com" ><i className="fa fa-envelope-o" id="mail-icon-browser" aria-label="trauma therapy colorado email"></i></Link>
                    <Link href="https://www.psychologytoday.com/us/therapists/martha-carter-denver-co/1061265" target="_blank" style={{"textDecoration": "none"}} aria-label="therapy in colorado springs">
                        <div id="connect-btn">PT</div>
                    </Link>
                    
                </div>
            }
        </div>
    )
}