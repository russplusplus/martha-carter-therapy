
import "~/styles/styles.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Martha Carter Therapy",
  description: "Online trauma therapy for adults in Colorado",
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
      <body className={GeistSans.className}>
          <TRPCReactProvider>
              {children}
          </TRPCReactProvider>
      </body>
    </html>
  );
}
