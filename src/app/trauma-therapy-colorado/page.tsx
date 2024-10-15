import { ClientWrapper } from "../components/ClientWrapper"

import { BookingModalContextProvider } from "../components/BookingModalContext"
import { BookingModal } from "../components/BookingModal"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { AboutYou } from "../components/AboutYou"
import { CurveFromCream2,
         CurveToCream2,
         CurveFromCream1,
         CurveToCream1,
         CurveFromCream3,
         CurveToCream3 } from "../components/Curves"
import { HeadshotSection } from "../components/HeadshotSection"
import { SocialProofWrapper } from "../components/SocialProofWrapper"
import { SocialProof1, SocialProof2 } from "../components/SocialProof"
import { About } from "../components/About"
import { MoreAbout } from "../components/MoreAbout"
import { Certification } from "../components/Certification"
import { FAQ } from "../components/FAQ"
import { Footer } from "../components/Footer"

import { AppContextProvider } from "../components/AppContext"

export default function Page() {

  return (
    <AppContextProvider>
      <ClientWrapper>
        <BookingModalContextProvider>
          <BookingModal />
        </BookingModalContextProvider>
        <Header />
        <CurveFromCream1 />
        {/* <CurveToCream1 /> */}
        <Footer />
      </ClientWrapper>
    </AppContextProvider>
  );
}
