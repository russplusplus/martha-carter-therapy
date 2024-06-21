"use client"

import React, { useState, createContext, useContext } from 'react'

type AppContext = {
    isMenuOpen: boolean
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    isBookingModalOpen: boolean
    setBookingModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    isBookingStarted: boolean
    setBookingStarted: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContext | null>(null)

export const AppContextProvider = (props: any) => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isBookingModalOpen, setBookingModalOpen] = useState<boolean>(false)
    const [isBookingStarted, setBookingStarted] = useState<boolean>(false)

    const value = {
        isMenuOpen,
        setMenuOpen,
        isBookingModalOpen,
        setBookingModalOpen,
        isBookingStarted,
        setBookingStarted
    }

    return <AppContext.Provider value={value} {...props} />
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within AppContextProvider')
    }
    return context
}