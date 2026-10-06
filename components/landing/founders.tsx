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
      name: "Kate Fragaki",
      role: "Co-founder",
      photo: "/assets/photo_kate.png",
      accentColor: "#7c68c8", // Purple
    },
  ]

  return (
    <section id="founders" className="w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 xl:px-28">
        {/* Header */}
        <div className="space-y-3 mb-10 lg:mb-14">
          <span className="font-mono font-bold text-[11px] sm:text-[13px] tracking-[0.44px] sm:tracking-[0.52px] text-[#636b78] uppercase">
            THE PEOPLE BEHIND THE PARK
          </span>
          <h2 className="font-heading font-extrabold text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.08] text-[#2a303c]">
            Founded in Abuja, built for everyone.
          </h2>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-white border border-[#e2e4e8] rounded-[20px] lg:rounded-[28px] p-3.5 sm:p-5 flex items-center gap-4 sm:gap-7 transition-all duration-300 hover:shadow-md hover:border-[#cbd0d8]"
            >
              {/* Photo */}
              <div className="relative w-[96px] h-[96px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-[14px] sm:rounded-[20px] overflow-hidden flex-shrink-0 bg-[#e2e4e8]">
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
                  className="w-10 h-1.5 rounded-[3px]"
                  style={{ backgroundColor: founder.accentColor }}
                />
                <h3 className="font-heading font-extrabold text-[20px] sm:text-[28px] lg:text-[32px] leading-tight text-[#2a303c]">
                  {founder.name}
                </h3>
                <p className="font-body font-medium text-[14px] sm:text-[17px] text-[#636b78]">
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
