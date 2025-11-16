import type React from "react"
import type { Metadata } from "next"
import { Fira_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-sans",
})

export const metadata: Metadata = {
  title: "FLUX Design System",
  description: "Proyecto exploratorio centrado en la creación de un sistema de diseño escalable basado en tokens, con sincronización hacia el front-end. La propuesta busca explorar coherencia visual, contraste y flexibilidad entre modos claros y oscuros.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
