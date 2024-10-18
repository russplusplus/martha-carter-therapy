"use client"

const log = console.log.bind(console)

import { useState, useEffect } from "react"
import { useAppContext } from "./AppContext"
import { useBookingModalContext } from "./BookingModalContext"

import { api } from "~/trpc/react";
import { ColorRing } from "react-loader-spinner"

import { IoClose } from "react-icons/io5";
import { browserName } from 'react-device-detect';
import Image from "next/image"

export function BookingModal() {
    const { 
        isBookingModalOpen, setBookingModalOpen,
        isBookingStarted, setBookingStarted
    } = useAppContext()

    const {
        firstName,setFirstName,
        lastName, setLastName,
        email, setEmail,
        about, setAbout
    } = useBookingModalContext()

    const [ isSubmitting, setSubmitting ] = useState(false)
    const [ isBookingComplete, setBookingComplete ] = useState(false)

    const [ incomplete, setIncomplete ] = useState(false)

    const submitBooking = api.post.book.useMutation()

    async function submitForm() {
        if (
            firstName === "" ||
            lastName  === "" ||
            email     === "" ||
            about     === ""
        ) {
            setIncomplete(true)
            return
        }

        setIncomplete(false)
        setSubmitting(true)
        log('in submitForm')

        const response = await submitBooking.mutateAsync({
            firstName,
            lastName,
            email,
            about
        })

        log('response:', response)
        setBookingComplete(true)
        setSubmitting(false)
    }

    function finishBooking() {
        setFirstName('')
        setLastName('')
        setEmail('')
        setAbout('')
        setBookingComplete(false)
        setBookingStarted(false)
        setBookingModalOpen(false)
    }

    useEffect(() => {
        log('isBookingModalOpen useEffect triggered')
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
        setIncomplete(false)
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
            <dialog id="booking-modal-container" className="prevent-select" open>
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
                    <button id={browserName === "Safari" ? "finish-booking-modal-btn-safari" : "finish-booking-modal-btn"} onClick={finishBooking}>Close</button>
                </div>
                :
                <form id="booking-modal" method="post">
                    <button id="exit-booking-modal-btn" onClick={() => setBookingModalOpen(false)}>
                        <IoClose />
                    </button>
                    <Field type="text" label={"First Name"} id="fname" value={firstName} setFunction={setFirstName}/>
                    <Field type="text" label="Last Name" id="lname" value={lastName} setFunction={setLastName} />
                    <Field type="email" label="Email Address" id="email" value={email} setFunction={setEmail} />
                    <Field type="textarea" label="A Bit About You" id="about" value={about} setFunction={setAbout} />
                    {incomplete &&
                        <h2 id="incomplete-message" className="flex-h-center">Please complete all fields.</h2>
                    }
                    <button id={browserName === "Safari" ? "submit-booking-modal-btn-safari" : "submit-booking-modal-btn"} className="prevent-select" onClick={submitForm} type="button">
                        {isSubmitting
                        ? <ColorRing 
                            colors={["#cdb8ff","#cdb8ff","#cdb8ff","#cdb8ff","#cdb8ff"]}
                        />
                        : "Submit"
                        }
                    </button>
                </form>
                }
                </div>
            </dialog>
            :
            <>
                {isBookingStarted &&
                <div id={"book-btn-corner"} className="prevent-select" onClick={() => setBookingModalOpen(true)}>
                    <Image id="book-btn-corner-logo" src="/flower-forest.png" fill alt="Martha Carter Therapy Somatic Therapist Denver Flower Logo"></Image>
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
}: {
    type: string,
    label: string,
    id: string,
    value: string | undefined
    setFunction: React.Dispatch<React.SetStateAction<string>>
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