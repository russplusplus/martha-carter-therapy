"use client"

import { useEffect, useState } from "react"
import { useAppContext } from "./AppContext"
import { browserName } from 'react-device-detect';

// const bookBtnClass = browserName === "Chrome" ? "book-btn" : "book-btn-safari"

const log = console.log.bind(console)

log('browserName:', browserName)

export function CallToAction(
  { className } 
  : 
  { className?: string }
) {
  const { setBookingModalOpen } = useAppContext()
  const [ bookBtnClass, setBookBtnClass] = useState("book-btn")

  const allClassNames = "flex-h-center margin-t-l margin-b-l cream " + className


  //
  useEffect(() => {
    setBookBtnClass(browserName === "Safari" ? "book-btn-safari" : "book-btn")
  }, [browserName])

  return (
    <div className={allClassNames} onClick={() => setBookingModalOpen(true)}>
      <h2 className={bookBtnClass}>
        Book a free consultation
      </h2>
    </div>
  )
}