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
            const firstElement = event.composedPath()[0]
            log('firstElement:', firstElement)
            if (   !firstElement?.className.includes('menu') 
                && !firstElement?.id.includes('menu') 
                && !firstElement?.className.includes('hamburger')) {
                setMenuOpen(false)
            }



            // log("isBookingModalOpen:", isBookingModalOpen)
            let insideBookingModal = false
            let insideBookingModalContainer = false
            for (let element of event.composedPath()) {
                // console.log('element.id:', element.id)
                if (element?.id === "booking-modal") insideBookingModal = true
                if (element?.id === "booking-modal-container") insideBookingModalContainer = true
            }
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