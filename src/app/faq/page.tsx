import { ClientWrapper } from "../components/ClientWrapper"
import { Metadata } from "next"
import { BookingModal } from "../components/BookingModal"
import { Header } from "../components/Header"
import { CurveFromCream3 } from "../components/Curves"
import { FAQ } from "../components/FAQ"
import { Footer } from "../components/Footer"

export const metadata: Metadata = {
  title: {
      absolute: "Martha Carter Therapy | FAQs"
  }
}

export default function Page() {
  return (
    <ClientWrapper>
      <BookingModal />
      <Header />
      <CurveFromCream3 />
      <FAQ />
      <Footer />
    </ClientWrapper>
  );
}
