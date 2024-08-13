"use client"

import { useEffect, useState } from "react"
import { useAppContext } from "./AppContext"
import { browserName } from 'react-device-detect';

const log = console.log.bind(console)

log('browserName:', browserName)

export function CallToAction(
  { className } 
  : 
  { className?: string }
) {
  const { setBookingModalOpen } = useAppContext()
  const [ bookBtnClass, setBookBtnClass] = useState("book-btn prevent-select")

  const allClassNames = "flex-h-center margin-t-l margin-b-l cream prevent-select" + className

  useEffect(() => {
    setBookBtnClass(browserName === "Safari" ? "book-btn-safari prevent-select" : "book-btn prevent-select")
  }, [browserName])

  return (
    <div className={allClassNames}>
      <h2 className={bookBtnClass} onClick={() => setBookingModalOpen(true)}>
        Book a free consultation
      </h2>
    </div>
  )
}

// bookBtnClass needs to be a state variable in this component.
//
// Similar cases in other components (Menu, BookingModal) define a className variable
// at the top level of the file based on browserName. However, this pattern causes an
// issue in this component for unclear reasons.
//
// ISSUE: The element using bookBtnClass get prerendered on the server, causing a mismatch
// when the bookBtnClass gets updated in the browser. Next.js uses the server value over
// the browser value, causing the wrong className to be applied in Safari.
// 
// WORKAROUND: bookBtnClass is a state variable, rather than a top-level variable, 
// and get updated client-side with a useEffect
//
// TODO: Figure out why this component get a mismatch warning when using a top-level
// className variable while other components work fine
