"use client"

const log = console.log.bind(console)

import { api } from "~/trpc/react";
import { ColorRing } from "react-loader-spinner"


export function SubmitBtn({
    firstName,
    lastName,
    email,
    about,
    isSubmitting,
    setSubmitting
}: {
    firstName: string,
    lastName: string,
    email: string,
    about: string,
    isSubmitting: boolean,
    setSubmitting: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const submitBooking = api.post.book.useMutation()

    async function submitForm() {
        setSubmitting(true)
        log('in submitForm')

        const response = await submitBooking.mutateAsync({
            firstName,
            lastName,
            email,
            about
        })

        log('response:', response)
        setSubmitting(false)
        

    }

    return (
        <button id="submit-booking-modal-btn" onClick={submitForm} type="button">
            {isSubmitting
            ? <ColorRing 
                colors={["#cdb8ff","#cdb8ff","#cdb8ff","#cdb8ff","#cdb8ff"]}
            />
            : "Submit"
            }
        </button>
    )
}