"use client"

import React, { useState, createContext, useContext } from "react"

type BookingModalContext = {
    firstName: string,
    setFirstName: React.Dispatch<React.SetStateAction<string>>,
    lastName: string,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    about: string,
    setAbout: React.Dispatch<React.SetStateAction<string>>,
}

const BookingModalContext = createContext<BookingModalContext | null>(null)

export const BookingModalContextProvider = (props: object) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")

    const value = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        about,
        setAbout
    }

    return <BookingModalContext.Provider value={value} {...props} />
}

export const useBookingModalContext = () => {
    const context = useContext(BookingModalContext)
    if (!context) {
        throw new Error('useBookingModalContext must be used within BookingModalContextProvider')
    }
    return context
}