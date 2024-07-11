"use client"

const log = console.log.bind(console)

import { useEffect, useRef } from 'react'
import { useAppContext } from './AppContext'

export function ClientWrapper(
    { children }
    :
    { children: React.ReactNode}
) {

    const { setMenuOpen, isBookingModalOpen, setBookingModalOpen } = useAppContext()
    // const aboutRef = document.getElementById("about-row-container")
    // console.log('aboutRef:', aboutRef)

    useEffect(() => {
        document.addEventListener("click", (event): void => {
            
            let insideHamburgerMenu = false
            let insideBookingModal = false
            let insideBookingModalContainer = false

            for (const element of event.composedPath()) {
                // @ts-expect-error:next-line
                if (element?.id === "menu-container") insideHamburgerMenu = true
                // @ts-expect-error:next-line
                if (element?.id === "booking-modal") insideBookingModal = true
                // @ts-expect-error:next-line
                if (element?.id === "booking-modal-container") insideBookingModalContainer = true
            }

            if (!insideHamburgerMenu) setMenuOpen(false)
            if (!insideBookingModal && insideBookingModalContainer) setBookingModalOpen(false)
        
        })
    }, [])

    return (
        <>
            { children }
        </>
    )
}