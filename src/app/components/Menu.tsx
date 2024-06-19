// useState only works in client component
"use client"

// const log = console.log.bind(console)

// log('we"re logging baby')

import { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import { useAppContext } from './AppContext'

export function Menu() {

    // const [isOpen, setOpen] = useState(false)
    let { isMenuOpen, setMenuOpen } = useAppContext()

    useEffect(() => {
        console.log('isMenuOpen:', isMenuOpen)
    }, [isMenuOpen])

    return (
        <>
            <div id={isMenuOpen ? "menu-btn-open" : "menu-btn-closed"}>
                <Hamburger toggled={isMenuOpen} toggle={setMenuOpen}/>
            </div>
            {isMenuOpen && 
                <div id="menu">
                    <h2 className="menu-row">
                        Book a free consultation
                    </h2>
                    <h2 className="menu-row">
                        About
                    </h2>
                    <h2 className="menu-row">
                        Q & A
                    </h2>
                    <h2 className="menu-row">
                        Another section
                    </h2>
                </div>
            }
            


        </>
    )
}