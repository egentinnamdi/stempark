import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "STEM PARK — Where Abuja comes to build, play and stay",
  description:
    "A tech-integrated resort in Life Camp: restaurants, sport, wellness and a co-working hub for founders and engineers. Nigeria's silicon valley — opening one world at a time.",
  icons: {
    icon: [
      { url: "/assets/logo_mark.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/assets/logo_mark.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased scroll-smooth",
        bricolage.variable,
        dmSans.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="font-sans bg-[#f7f6f3] text-[#2a303c] min-h-screen selection:bg-[#1f9d55] selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
