"use client"

const log = console.log.bind(console)

import { useEffect } from 'react'
import { useAppContext } from './AppContext'

export function ClientContainer(
    { children }
    :
    { children: React.ReactNode}
) {

    const { setMenuOpen } = useAppContext()

    useEffect(() => {
        log('in ClientContainer useEffect')
        document.addEventListener("click", (event) => {
            log(' event.composedPath()[0]:',  event.composedPath()[0].className)

            if (!event.composedPath()[0]?.className.includes('menu') && !event.composedPath()[0]?.id.includes('menu') && !event.composedPath()[0].className.includes('hamburger')) {
                setMenuOpen(false)
            }
        })
    }, [])


    return (
        <>
            { children }
        </>
    )
}