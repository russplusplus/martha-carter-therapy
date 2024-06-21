"use client"

const log = console.log.bind(console)

import { useState, useEffect } from "react"
import { useAppContext } from "./AppContext";

import { IoClose } from "react-icons/io5";

type FormData = {
    fname: string,
    lname: string,
    email: string,
    about: string
}

export function BookingModal() {
    const { 
        isBookingModalOpen, 
        setBookingModalOpen,
        isBookingStarted,
        setBookingStarted
    } = useAppContext()

    // const [ formData, setFormData ] = useState<FormData | null>(null)

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ about, setAbout ] = useState('')

    const [ isBookingComplete, setBookingComplete ] = useState(false)

    function finishBooking() {
        setFirstName('')
        setLastName('')
        setEmail('')
        setAbout('')
        setBookingComplete(false)
        setBookingStarted(false)
        setBookingModalOpen(false)
    }

    function submitForm() {
        log('in submitForm')
        setBookingComplete(true)
        setBookingStarted(false)
    }

    useEffect(() => {
        console.log('isBookingModalOpen useEffect triggered')
        if (!isBookingModalOpen) {
            if (
                firstName ||
                lastName  ||
                email     ||
                about
            ) {
                setBookingStarted(true)
            } else {
                setBookingStarted(false)
            }
            setBookingModalOpen(false)
        }
    }, [isBookingModalOpen])

    useEffect(() => {
        log('isBookingModalOpen:', isBookingModalOpen)
    }, [isBookingModalOpen])

    useEffect(() => {
        log('isBookingStarted:', isBookingStarted)
    }, [isBookingStarted])

    return (
        <>
            {isBookingModalOpen ?
            <dialog id="booking-modal-container" open>
                <div >
                { isBookingComplete ?
                <div id="thank-you">
                    <h2 className="flex-h-center green">
                        Thank you!
                    </h2>
                    <br/>
                    <h2 className="flex-h-center green">
                        I look forward to getting in touch with you soon.
                    </h2>
                    <br/>
                    <button id="finish-booking-modal-btn" onClick={finishBooking}>Close</button>
                </div>
                :
                <form id="booking-modal" method="post">
                    <button id="exit-booking-modal-btn" onClick={() => setBookingModalOpen(false)}><IoClose /></button>
                    <Field type="text" label="First Name" id="fname" value={firstName} setFunction={setFirstName}/>
                    <Field type="text" label="Last Name" id="lname" value={lastName} setFunction={setLastName} />
                    <Field type="email" label="Email Address" id="email" value={email} setFunction={setEmail} />
                    <Field type="textarea" label="A Bit About You" id="about" value={about} setFunction={setAbout} />
                    <button id="submit-booking-modal-btn" onClick={submitForm} type="button">Submit</button>
                </form>
                }
                </div>
            </dialog>
            :
            <>
                {isBookingStarted &&
                <div id={"book-btn-corner"} onClick={() => setBookingModalOpen(true)}>
                    <img id="book-btn-corner-logo" src="flower-forest.png"></img>
                </div>
                }
            </>
            }
        </>
        
    )
}

function Field({
    type,
    label,
    id,
    value,
    setFunction
} : {
    type: string,
    label: string,
    id: string,
    value: string | undefined
    setFunction: Function
}) {
    return (
        <>
            <label htmlFor={id} className="green">
                {label}:
            </label>
            {type === 'textarea' 
            ?   <textarea id={id} name={id} rows={4} value={value} onChange={(e) => setFunction(e.target.value)} />
            :   <input id={id} type={type} name={id} value={value} onChange={(e) => setFunction(e.target.value)}/>
            }
            <br/>
        </>
    )
}