"use client"

import { useAppContext } from "./AppContext"
import { browserName } from 'react-device-detect';
console.log('browserName:', browserName)
const bookBtnClass = browserName === "Safari" ? "book-btn-safari" : "book-btn"
console.log('bookBtnClass:', bookBtnClass)

export function CallToAction(
  { className } 
  : 
  { className?: string }
) {
  const { setBookingModalOpen } = useAppContext()

  const allClassNames = "flex-h-center margin-t-l margin-b-l cream " + className

  return (
    <div className={allClassNames} onClick={() => setBookingModalOpen(true)}>
      <h2 className={bookBtnClass}>
        Book a free consultation
      </h2>
    </div>
  )
}