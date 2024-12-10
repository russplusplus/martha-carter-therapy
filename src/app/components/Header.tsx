"use client"

import { BrowserMenu } from './BrowserMenu'
import { MobileMenu } from './MobileMenu'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { relative } from 'path'
import { BrowserView, MobileView } from "react-device-detect"
import { useState } from 'react'

const log = console.log.bind(console)

export function Header() {
    const pathname = usePathname()
    log('pathname:', pathname)

    const [ isMenuOpen, setMenuOpen ] = useState(false)
    
    return (
        <header className="prevent-select">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <BrowserView>   
                <div className="flex-h-center header-container">
                    <div id="header-icon">
                        <Link href="/">
                            <Image 
                                src="/flower-lavender-cropped.png" 
                                alt="Somatic Therapist Denver Flower Logo" 
                                height="64"
                                width="58"
                                sizes="100vw"
                            ></Image>
                        </Link>
                    </div>
                    <div id="mct-container">
                        <Link href="/">
                            <Image src="/mct4.png" height="54" width="267" alt="MARTHA Somatic Therapist Denver"></Image>
                        </Link>
                    </div>
                    <div id="browser-nav-container">
                        <Link 
                            href="/somatic-therapist-denver" 
                            className={"paragraph browser-nav-item hover-underline " + (pathname === "/somatic-therapist-denver" ? "underline" : "")}
                        >About Me</Link>
                        <Link 
                            href="/trauma-therapy-colorado" 
                            className={"paragraph browser-nav-item hover-underline " + (pathname === "/trauma-therapy-colorado" ? "underline" : "")}
                        >Who I See</Link>
                        <Link 
                            href="/therapy-in-colorado-springs" 
                            className={"paragraph browser-nav-item hover-underline " + (pathname === "/therapy-in-colorado-springs" ? "underline" : "")}
                        >My Approach</Link>
                        <Link 
                            href="/faq" 
                            className={"paragraph browser-nav-item hover-underline " + (pathname === "/faq" ? "underline" : "")}
                        >FAQ</Link>
                    </div>
                    <div 
                        id="browser-contact-container"
                        onMouseEnter={() => {log("onMouseEnter")
                            setMenuOpen(true)}}
                        onMouseLeave={() => setMenuOpen(false)}>
                        <Link
                            href="https://martha-carter.clientsecure.me"
                            className={"paragraph browser-nav-item hover-underline"}
                            target="_blank"
                        >Contact</Link>
                    </div>
                    
                    <BrowserMenu/>
                </div>
                {isMenuOpen &&
                    <div 
                        id="browser-contact-dropdown"
                        onMouseEnter={() => setMenuOpen(true)}
                        onMouseLeave={() => setMenuOpen(false)}
                        >
                        <div className="paragraph browser-contact-dropdown-item">
                            <Link
                                href="https://martha-carter.clientsecure.me"
                                className="hover-underline"
                                target="_blank"
                            >Book a Free Consultation</Link>
                        </div>
                        <div className="paragraph browser-contact-dropdown-item">
                            <Link
                                href="https://martha-carter.clientsecure.me"
                                className="hover-underline"
                                target="_blank"
                            >Reach Out</Link>
                        </div>
                    </div>
                }
                <div style={{height: '6rem'}}></div>
            </BrowserView>
            <MobileView>
                <div id="contact-container">
                    <Link href="https://www.instagram.com/therapy.with.martha" target="_blank" aria-label="somatic therapist denver instagram"><i className="fa fa-instagram" id="ig-icon"></i></Link>
                    <Link href="mailto: marthacartertherapy@gmail.com" ><i className="fa fa-envelope-o" id="mail-icon" aria-label="trauma therapy colorado email"></i></Link>
                    <Link href="https://www.psychologytoday.com/us/therapists/martha-carter-denver-co/1061265" target="_blank" style={{"textDecoration": "none"}} aria-label="therapy in colorado springs">
                        <div id="connect-btn">PT</div>
                    </Link>
                </div>
                <MobileMenu />
            </MobileView>
        </header>
    )
}