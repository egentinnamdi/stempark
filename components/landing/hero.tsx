"use client"

import React from "react"
import Image from "next/image"

interface HeroProps {
  onSeeOpen: () => void
  onPartner: () => void
}

export function Hero({ onSeeOpen, onPartner }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 xl:px-28 pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-24">
        {/* Mobile View: Knot art on top */}
        <div className="lg:hidden flex justify-center mb-6">
          <div className="relative w-[280px] h-[280px] rounded-full bg-white border border-[#e2e4e8] p-4 flex items-center justify-center shadow-sm">
            <Image
              src="/assets/knot_art_mobile.svg"
              alt="STEM PARK Worlds Knot"
              width={260}
              height={260}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-7">
            {/* Live Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1f9d55] animate-pulse flex-shrink-0" />
              <span className="font-mono font-bold text-[11px] sm:text-[13px] tracking-[0.44px] sm:tracking-[0.52px] text-[#1f9d55] uppercase">
                BATCH 1 NOW OPEN · LIFE CAMP, ABUJA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-[44px] sm:text-[60px] lg:text-[76px] xl:text-[84px] leading-[1.02] tracking-[-0.44px] lg:tracking-[-1.68px] text-[#2a303c]">
              Where Abuja comes to build, play and stay.
            </h1>

            {/* Description Subtitle */}
            <p className="font-body text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.55] text-[#636b78] max-w-[592px]">
              A tech-integrated resort in Life Camp: restaurants, sport, wellness and a
              co-working hub for founders and engineers. Nigeria&apos;s silicon valley — opening
              one world at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onSeeOpen}
                className="bg-[#1f9d55] hover:bg-[#188346] active:scale-[0.98] text-white font-bold text-[16px] px-6 py-4 rounded-[14px] transition-all duration-200 shadow-sm text-center"
              >
                See what&apos;s open
              </button>
              <button
                onClick={onPartner}
                className="bg-white hover:bg-[#f3f4f6] active:scale-[0.98] border border-[#e2e4e8] text-[#2a303c] font-bold text-[16px] px-6 py-4 rounded-[14px] transition-all duration-200 shadow-xs text-center"
              >
                Partner with us
              </button>
            </div>

            {/* Key Metrics / Stat Counters (visible on all screens, optimized for mobile) */}
            <div className="grid grid-cols-3 gap-4 sm:gap-10 pt-4 lg:pt-6 border-t border-[#e2e4e8]/60 sm:border-none">
              <div>
                <div className="font-heading font-extrabold text-[24px] sm:text-[32px] leading-tight text-[#2a303c]">
                  1,400 m²
                </div>
                <div className="font-body text-[12px] sm:text-[14px] text-[#636b78] mt-0.5">
                  of park in Life Camp
                </div>
              </div>

              <div>
                <div className="font-heading font-extrabold text-[24px] sm:text-[32px] leading-tight text-[#2a303c]">
                  12
                </div>
                <div className="font-body text-[12px] sm:text-[14px] text-[#636b78] mt-0.5">
                  experiences planned
                </div>
              </div>

              <div>
                <div className="font-heading font-extrabold text-[24px] sm:text-[32px] leading-tight text-[#2a303c]">
                  6
                </div>
                <div className="font-body text-[12px] sm:text-[14px] text-[#636b78] mt-0.5">
                  worlds, one knot
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Knot Art Diagram */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative w-[520px] h-[520px] xl:w-[560px] xl:h-[560px] transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/assets/knot_art_desktop.svg"
                alt="STEM PARK Interactive Worlds Knot Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
