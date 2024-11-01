
import "~/styles/styles.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import type { Metadata } from 'next'
import { AppContextProvider } from "./components/AppContext"
import { BookingModalContextProvider } from "./components/BookingModalContext"
import { GoogleTagManager } from '@next/third-parties/google' 

export const metadata: Metadata = {
  title: {
    default: "Somatic Therapist Denver | Martha Carter Therapy",
    template: "%s"
  },
  description: "Online somatic trauma therapy for adults in Colorado",
  metadataBase: new URL("https://martha-carter-therapy.vercel.app"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-ZLP98CS0LB" />
      <body className={GeistSans.className}>
        <TRPCReactProvider>
          <AppContextProvider>
            <BookingModalContextProvider>
              {children}
            </BookingModalContextProvider>
          </AppContextProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
