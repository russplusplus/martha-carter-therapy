"use client"

const log = console.log.bind(console)

import { useEffect, useRef } from 'react'
import { useAppContext } from './AppContext'

export function ClientContainer(
    { children }
    :
    { children: React.ReactNode}
) {

    const { setMenuOpen, isBookingModalOpen, setBookingModalOpen } = useAppContext()
    // const aboutRef = document.getElementById("about-row-container")
    // console.log('aboutRef:', aboutRef)

    useEffect(() => {
        document.addEventListener("click", (event) => {
            
            let insideHamburgerMenu = false
            let insideBookingModal = false
            let insideBookingModalContainer = false

            for (let element of event.composedPath()) {
                if (element?.id === "menu-container") insideHamburgerMenu = true
                if (element?.id === "booking-modal") insideBookingModal = true
                if (element?.id === "booking-modal-container") insideBookingModalContainer = true
            }

            if (!insideHamburgerMenu) setMenuOpen(false)
            if (!insideBookingModal && insideBookingModalContainer) setBookingModalOpen(false)
        
        })
    }, [])

    useEffect(() => {
        console.log('isBookingModalOpen:', isBookingModalOpen)
    }, [isBookingModalOpen])


    return (
        <>
            { children }
        </>
    )
}