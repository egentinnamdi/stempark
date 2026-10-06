"use client"

import React from "react"

interface OpenNowProps {
  onSeeMenu: () => void
  onBookPitch: () => void
}

export function OpenNow({ onSeeMenu, onBookPitch }: OpenNowProps) {
  return (
    <section id="open-now" className="w-full bg-[#1e2430] text-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 xl:px-28">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-14">
          <div className="space-y-3">
            <span className="font-mono font-bold text-[11px] sm:text-[13px] tracking-[0.44px] sm:tracking-[0.52px] text-[#4cc384] uppercase">
              OPEN NOW · BATCH 1
            </span>
            <h2 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.08] text-white">
              Two worlds are already live.
            </h2>
          </div>

          <p className="font-body text-[16px] sm:text-[18px] leading-[1.55] text-[#a3abb8] max-w-sm whitespace-pre-line">
            Come hungry. Come to play.
            No queue, no waving, no cash.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Outdoor Restaurant */}
          <div className="bg-[#262e3b] rounded-[22px] lg:rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-xl">
            <div className="space-y-4 sm:space-y-5">
              {/* Strand Color Accent Line (Red for EAT) */}
              <div className="w-16 h-1.5 bg-[#eb3228] rounded-[3px]" />

              <span className="block font-mono font-bold text-[13px] tracking-[0.52px] text-[#a3abb8] uppercase">
                EAT
              </span>

              <h3 className="font-heading font-extrabold text-[24px] sm:text-[36px] text-white leading-tight">
                Outdoor Restaurant
              </h3>

              <p className="font-body text-[15px] sm:text-[17px] leading-[1.53] text-[#e9ecf2]">
                Sit at any table, scan the QR code, order and pay on your phone. We bring
                it to you.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2.5 text-[15px] text-[#e9ecf2]">
                  <span className="w-2 h-2 rounded-full bg-[#eb3228]/80 flex-shrink-0" />
                  <span>Grills, jollof, soups, small chops</span>
                </li>
                <li className="flex items-center gap-2.5 text-[15px] text-[#e9ecf2]">
                  <span className="w-2 h-2 rounded-full bg-[#eb3228]/80 flex-shrink-0" />
                  <span>Chapman, zobo and cold drinks</span>
                </li>
                <li className="flex items-center gap-2.5 text-[15px] text-[#e9ecf2]">
                  <span className="w-2 h-2 rounded-full bg-[#eb3228]/80 flex-shrink-0" />
                  <span>Open daily · 12 pm – 11 pm</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onSeeMenu}
                className="w-full sm:w-auto bg-[#1f9d55] hover:bg-[#188346] active:scale-[0.98] text-white font-bold text-[16px] px-6 py-4 rounded-[14px] transition-all duration-200 shadow-sm"
              >
                See the menu
              </button>
            </div>
          </div>

          {/* Card 2: Football Pitch */}
          <div className="bg-[#262e3b] rounded-[22px] lg:rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-xl">
            <div className="space-y-4 sm:space-y-5">
              {/* Strand Color Accent Line (Green for PLAY) */}
              <div className="w-16 h-1.5 bg-[#31a63a] rounded-[3px]" />

              <span className="block font-mono font-bold text-[13px] tracking-[0.52px] text-[#a3abb8] uppercase">
                PLAY
              </span>

              <h3 className="font-heading font-extrabold text-[24px] sm:text-[36px] text-white leading-tight">
                Football Pitch
              </h3>

              <p className="font-body text-[15px] sm:text-[17px] leading-[1.53] text-[#e9ecf2]">
                A compact floodlit turf for five-a-side, team nights and tournaments. Book by
                the hour and pay online.
              </p>

              {/* Bullet Features */}
              <ul className="space-y-2.5 pt-2">
                <li className="flex items-center gap-2.5 text-[15px] text-[#e9ecf2]">
                  <span className="w-2 h-2 rounded-full bg-[#31a63a]/80 flex-shrink-0" />
                  <span>From ₦25,000 per hour</span>
                </li>
                <li className="flex items-center gap-2.5 text-[15px] text-[#e9ecf2]">
                  <span className="w-2 h-2 rounded-full bg-[#31a63a]/80 flex-shrink-0" />
                  <span>Floodlights, bibs and balls</span>
                </li>
                <li className="flex items-center gap-2.5 text-[15px] text-[#e9ecf2]">
                  <span className="w-2 h-2 rounded-full bg-[#31a63a]/80 flex-shrink-0" />
                  <span>Open daily · 7 am – 10 pm</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onBookPitch}
                className="w-full sm:w-auto bg-[#1f9d55] hover:bg-[#188346] active:scale-[0.98] text-white font-bold text-[16px] px-6 py-4 rounded-[14px] transition-all duration-200 shadow-sm"
              >
                Book the pitch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
