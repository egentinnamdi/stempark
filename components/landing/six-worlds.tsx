"use client"

import React from "react"

interface WorldItem {
  id: string
  name: string
  color: string
  badgeText: string
  badgeTextMobile: string
  isOpen: boolean
  descriptionDesktop: string
  descriptionMobile: string
}

const WORLDS: WorldItem[] = [
  {
    id: "eat",
    name: "Eat",
    color: "#eb3228",
    badgeText: "OPEN",
    badgeTextMobile: "OPEN",
    isOpen: true,
    descriptionDesktop: "Three themed restaurants and outdoor dining, with private events.",
    descriptionMobile: "Three themed restaurants and outdoor dining.",
  },
  {
    id: "play",
    name: "Play",
    color: "#31a63a",
    badgeText: "PITCH OPEN",
    badgeTextMobile: "PITCH OPEN",
    isOpen: true,
    descriptionDesktop: "Football pitch, paintball arena and a kids playground.",
    descriptionMobile: "Football pitch, paintball and a kids playground.",
  },
  {
    id: "train",
    name: "Train",
    color: "#fa7d19",
    badgeText: "COMING SOON",
    badgeTextMobile: "SOON",
    isOpen: false,
    descriptionDesktop: "Gym and fitness centre, plus an indoor shooting range.",
    descriptionMobile: "Gym, fitness centre and shooting range.",
  },
  {
    id: "stay",
    name: "Stay",
    color: "#1e69c6",
    badgeText: "COMING SOON",
    badgeTextMobile: "SOON",
    isOpen: false,
    descriptionDesktop: "Fifteen luxury rooms, a pool deck and VIP cabanas.",
    descriptionMobile: "Fifteen luxury rooms, pool deck and cabanas.",
  },
  {
    id: "build",
    name: "Build",
    color: "#7c68c8",
    badgeText: "COMING SOON",
    badgeTextMobile: "SOON",
    isOpen: false,
    descriptionDesktop: "A co-working hub for startups, founders and software engineers.",
    descriptionMobile: "Co-working hub for founders and engineers.",
  },
  {
    id: "wonder",
    name: "Wonder",
    color: "#eec40a",
    badgeText: "COMING SOON",
    badgeTextMobile: "SOON",
    isOpen: false,
    descriptionDesktop: "VR game room, cinema and a hydroponic indoor farm.",
    descriptionMobile: "VR room, cinema and a hydroponic farm.",
  },
]

export function SixWorlds() {
  return (
    <section id="six-worlds" className="w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 xl:px-28">
        {/* Header */}
        <div className="space-y-3 mb-10 lg:mb-14">
          <span className="font-mono font-bold text-[11px] sm:text-[13px] tracking-[0.44px] sm:tracking-[0.52px] text-[#636b78] uppercase">
            SIX WORLDS, ONE KNOT
          </span>
          <h2 className="font-heading font-extrabold text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.08] text-[#2a303c]">
            Every strand of our logo is a place to go.
          </h2>
        </div>

        {/* Desktop / Tablet Grid: 3 columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORLDS.map((world) => (
            <div
              key={world.id}
              className="bg-white border border-[#e2e4e8] rounded-[24px] p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:shadow-md hover:border-[#cbd0d8]"
            >
              {/* Top Row: Swatch & Badge */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-[14px] flex-shrink-0 transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: world.color }}
                />
                <span
                  className={`font-body font-bold text-[11.5px] tracking-[0.69px] uppercase px-3 py-1 rounded-full ${
                    world.isOpen
                      ? "bg-[#e3f4ea] text-[#1f9d55]"
                      : "bg-[#f7f6f3] text-[#636b78]"
                  }`}
                >
                  {world.badgeText}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-[34px] leading-tight text-[#2a303c]">
                  {world.name}
                </h3>
                <p className="font-body text-[16px] leading-[1.5] text-[#636b78]">
                  {world.descriptionDesktop}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Clean horizontal list cards matching Mobile 390 Frame */}
        <div className="md:hidden flex flex-col space-y-3.5">
          {WORLDS.map((world) => (
            <div
              key={world.id}
              className="bg-white border border-[#e2e4e8] rounded-[18px] p-4 flex items-center justify-between gap-3.5 shadow-xs"
            >
              {/* Swatch */}
              <div
                className="w-10 h-10 rounded-[12px] flex-shrink-0"
                style={{ backgroundColor: world.color }}
              />

              {/* Title & Mobile Description */}
              <div className="flex-1 min-w-0 pr-1">
                <h3 className="font-heading font-extrabold text-[20px] leading-tight text-[#2a303c]">
                  {world.name}
                </h3>
                <p className="font-body text-[13px] leading-[1.38] text-[#636b78] truncate">
                  {world.descriptionMobile}
                </p>
              </div>

              {/* Mobile Badge */}
              <span
                className={`font-body font-bold text-[10px] tracking-[0.6px] uppercase px-2.5 py-1 rounded-full flex-shrink-0 ${
                  world.isOpen
                    ? "bg-[#e3f4ea] text-[#1f9d55]"
                    : "bg-[#f7f6f3] text-[#636b78]"
                }`}
              >
                {world.badgeTextMobile}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
