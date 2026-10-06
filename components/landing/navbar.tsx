"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface NavbarProps {
  onBookPitch: () => void
}

export function Navbar({ onBookPitch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Six worlds", href: "#six-worlds" },
    { label: "Open now", href: "#open-now" },
    { label: "Founders", href: "#founders" },
    { label: "Partner", href: "#partner" },
    { label: "Visit", href: "#visit" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f7f6f3]/95 backdrop-blur-md border-b border-[#e2e4e8]/60 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-20 xl:px-28 py-4 lg:py-6">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-[34px] h-[31px] sm:w-[44px] sm:h-[40px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/logo_mark.svg"
              alt="STEM PARK Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-heading font-extrabold text-[17px] sm:text-[22px] tracking-[0.68px] sm:tracking-[0.88px] text-[#2a303c]">
            STEM PARK
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-[15px] text-[#2a303c] hover:text-[#1f9d55] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onBookPitch}
            className="bg-[#1e2430] hover:bg-[#2c3545] active:scale-[0.98] text-white font-bold text-[16px] px-5 py-3.5 rounded-[14px] transition-all duration-200 shadow-sm"
          >
            Book the pitch
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors focus:outline-none"
        >
          <div className="w-[22px] h-[18px] flex flex-col justify-between py-[1px]">
            <span
              className={`block w-[22px] h-[2.5px] bg-[#2a303c] rounded-[2px] transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2.5px] bg-[#2a303c] rounded-[2px] transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2.5px] bg-[#2a303c] rounded-[2px] transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f7f6f3] border-b border-[#e2e4e8] px-5 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-[16px] text-[#2a303c] py-2 px-3 rounded-lg hover:bg-black/5 hover:text-[#1f9d55] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-[#e2e4e8]">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onBookPitch()
              }}
              className="w-full bg-[#1e2430] hover:bg-[#2c3545] text-white font-bold text-[16px] py-3.5 px-5 rounded-[14px] text-center transition-all duration-200"
            >
              Book the pitch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
