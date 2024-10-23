import { ClientWrapper } from "../components/ClientWrapper"
import { Metadata } from "next"

import { BookingModalContextProvider } from "../components/BookingModalContext"
import { BookingModal } from "../components/BookingModal"
import { Header } from "../components/Header"
import { WhoISee } from "../components/WhoISee"
import { MyApproach } from "../components/MyApproach"
import { GetStarted } from "../components/GetStarted"
import { CurveFromCream2,
         CurveToCream2,
         CurveFromCream1,
         CurveToCream1,
         CurveFromCream3,
         CurveToCream3 } from "../components/Curves"
import { Footer } from "../components/Footer"

import { AppContextProvider } from "../components/AppContext"

export const metadata: Metadata = {
    title: {
        absolute: "Trauma Therapy Colorado | Martha Carter Therapy"
    }
}

export default function Page() {

  return (
    // <AppContextProvider>
      <ClientWrapper>
        {/* <BookingModalContextProvider> */}
          <BookingModal />
        {/* </BookingModalContextProvider> */}
        <Header />
        <CurveFromCream2 />

        <WhoISee />
        {/* <CurveFromCream1 /> */}
        {/* <CurveFromCream3 /> */}
        <CurveToCream1 />
        {/* <GetStarted /> */}
        <MyApproach />
        <Footer />
      </ClientWrapper>
    // </AppContextProvider>
  );
}
