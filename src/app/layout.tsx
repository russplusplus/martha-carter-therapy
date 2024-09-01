
import "~/styles/styles.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

import { AppContextProvider } from "./components/AppContext";

export const metadata = {
  title: {
    default: "Martha Carter Therapy"
  },
  description: "Online trauma therapy for adults in Colorado",
  metadataBase: "https://martha-carter-therapy.vercel.app",
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
      <body className={GeistSans.className}>
          <TRPCReactProvider>
              {children}
          </TRPCReactProvider>
      </body>
    </html>
  );
}
