"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const strandColors = [
    "#7c68c8", // Build (Purple)
    "#1e69c6", // Stay (Blue)
    "#eb3228", // Eat (Red)
    "#fa7d19", // Train (Orange)
    "#eec40a", // Wonder (Yellow)
    "#31a63a", // Play (Green)
  ]

  return (
    <footer id="visit" className="w-full bg-[#1e2430] text-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 xl:px-28 pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
        {/* Desktop / Tablet Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 lg:pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-[36px] h-[32px] flex-shrink-0">
                <Image
                  src="/assets/logo_mark.svg"
                  alt="STEM PARK Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-[22px] tracking-[0.88px] text-white">
                STEM PARK
              </span>
            </div>
            <p className="font-body text-[16px] text-[#a3abb8] max-w-sm">
              Work, play and stay in Life Camp, Abuja.
            </p>
          </div>

          {/* Col 2: Visit */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono font-bold text-[12px] tracking-[0.72px] text-[#4cc384] uppercase">
              VISIT
            </span>
            <ul className="space-y-2 text-[15px] text-[#e9ecf2]">
              <li>Life Camp, Abuja</li>
              <li>Restaurant · 12 pm – 11 pm</li>
              <li>Pitch · 7 am – 10 pm</li>
            </ul>
          </div>

          {/* Col 3: Talk to us */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono font-bold text-[12px] tracking-[0.72px] text-[#4cc384] uppercase">
              TALK TO US
            </span>
            <ul className="space-y-2 text-[15px] text-[#e9ecf2]">
              <li>
                <a
                  href="tel:08053757555"
                  className="hover:text-[#4cc384] transition-colors"
                >
                  0805 375 7555
                </a>
              </li>
              <li>
                <a
                  href="tel:08139690031"
                  className="hover:text-[#4cc384] transition-colors"
                >
                  0813 969 0031
                </a>
              </li>
              <li className="text-[#a3abb8]">Site visits welcome</li>
            </ul>
          </div>

          {/* Col 4: Explore */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono font-bold text-[12px] tracking-[0.72px] text-[#4cc384] uppercase">
              EXPLORE
            </span>
            <ul className="space-y-2 text-[15px] text-[#e9ecf2]">
              <li>
                <Link
                  href="#six-worlds"
                  className="hover:text-[#4cc384] transition-colors"
                >
                  Six worlds
                </Link>
              </li>
              <li>
                <Link
                  href="#open-now"
                  className="hover:text-[#4cc384] transition-colors"
                >
                  Open now
                </Link>
              </li>
              <li>
                <Link
                  href="#founders"
                  className="hover:text-[#4cc384] transition-colors"
                >
                  Founders
                </Link>
              </li>
              <li>
                <Link
                  href="#partner"
                  className="hover:text-[#4cc384] transition-colors"
                >
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile View: Vertical format matching Mobile 390 Frame */}
        <div className="sm:hidden space-y-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="relative w-[28px] h-[25px] flex-shrink-0">
              <Image
                src="/assets/logo_mark.svg"
                alt="STEM PARK Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-extrabold text-[17px] tracking-[0.68px] text-white">
              STEM PARK
            </span>
          </div>
          <p className="font-body text-[14px] text-[#e9ecf2]">Life Camp, Abuja</p>
          <p className="font-body text-[14px] text-[#e9ecf2]">
            0805 375 7555 · 0813 969 0031
          </p>
          <p className="font-body text-[14px] text-[#e9ecf2]">
            Restaurant 12 pm – 11 pm · Pitch 7 am – 10 pm
          </p>
        </div>

        {/* Bottom Bar: Copyright & 6 Strand Color Bars */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] sm:text-[13px] text-[#a3abb8] text-center sm:text-left">
            © 2026 STEM PARK. All rights reserved.
          </p>

          {/* 6 Strand Color Bars (Purple, Blue, Red, Orange, Yellow, Green) */}
          <div className="flex items-center gap-1.5">
            {strandColors.map((color, idx) => (
              <span
                key={idx}
                className="w-7 h-1.5 rounded-[3px] transition-transform duration-200 hover:scale-125"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
