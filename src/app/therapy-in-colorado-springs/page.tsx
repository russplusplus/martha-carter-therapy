import { ClientWrapper } from "../components/ClientWrapper"
import { Metadata } from "next"
import { BookingModal } from "../components/BookingModal"
import { Header } from "../components/Header"
import { WhoISee } from "../components/WhoISee"
import { WhoISee2 } from "../components/WhoISee2"
import { MyApproach } from "../components/MyApproach"
import { CurveFromCream2,
         CurveToCream1 } from "../components/Curves"
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
    title: {
        absolute: "Therapy | Colorado Springs"
    }
}

export default function Page() {
  return (
      <ClientWrapper>
        <BookingModal />
        <Header />
        <CurveFromCream2 />
        <MyApproach />
        <Footer />
      </ClientWrapper>
  );
}
