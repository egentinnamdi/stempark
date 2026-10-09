"use client"

import React from "react"
import Image from "next/image"

export function Founders() {
  const founders = [
    {
      name: "Ezekwere Precious",
      role: "Founder & CEO",
      photo: "/assets/photo_ezekwere.png",
      accentColor: "#31a63a", // Green
    },
    {
      name: "Kate Fragkaki",
      role: "Co-founder",
      photo: "/assets/photo_kate.png",
      accentColor: "#7c68c8", // Purple
    },
  ]

  return (
    <section id="founders" className="w-full py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20 xl:px-28">
        {/* Header */}
        <div className="mb-10 space-y-3 lg:mb-14">
          <span className="font-mono text-[11px] font-bold tracking-[0.44px] text-[#636b78] uppercase sm:text-[13px] sm:tracking-[0.52px]">
            THE PEOPLE BEHIND THE PARK
          </span>
          <h2 className="font-heading text-[30px] leading-[1.08] font-extrabold text-[#2a303c] sm:text-[42px] lg:text-[52px]">
            Founded in Abuja, built for everyone.
          </h2>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex items-center gap-4 rounded-[20px] border border-[#e2e4e8] bg-white p-3.5 transition-all duration-300 hover:border-[#cbd0d8] hover:shadow-md sm:gap-7 sm:p-5 lg:rounded-[28px]"
            >
              {/* Photo */}
              <div className="relative h-[96px] w-[96px] flex-shrink-0 overflow-hidden rounded-[14px] bg-[#e2e4e8] sm:h-[180px] sm:w-[180px] sm:rounded-[20px] lg:h-[220px] lg:w-[220px]">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info Column */}
              <div className="flex flex-col space-y-2.5">
                {/* Accent Strand Bar */}
                <div
                  className="h-1.5 w-10 rounded-[3px]"
                  style={{ backgroundColor: founder.accentColor }}
                />
                <h3 className="font-heading text-[20px] leading-tight font-extrabold text-[#2a303c] sm:text-[28px] lg:text-[32px]">
                  {founder.name}
                </h3>
                <p className="font-body text-[14px] font-medium text-[#636b78] sm:text-[17px]">
                  {founder.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
