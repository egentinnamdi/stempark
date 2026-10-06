"use client"

import React from "react"

interface PartnerBannerProps {
  onRequestInvestorPack: () => void
  onBookSiteVisit: () => void
}

export function PartnerBanner({
  onRequestInvestorPack,
  onBookSiteVisit,
}: PartnerBannerProps) {
  return (
    <section id="partner" className="w-full pb-16 lg:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 xl:px-28">
        <div className="bg-[#1f9d55] rounded-[24px] lg:rounded-[32px] p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-10 shadow-lg">
          {/* Text Content */}
          <div className="space-y-3 lg:space-y-4 max-w-2xl">
            <h2 className="font-heading font-extrabold text-[28px] sm:text-[38px] lg:text-[48px] leading-[1.1] text-white">
              Build STEM PARK with us.
            </h2>
            <p className="font-body text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.55] text-[#e3f4ea]">
              <span className="hidden sm:inline">
                We are opening in batches and welcome investors, corporate partners and
                event organisers. Site visits are always welcome.
              </span>
              <span className="sm:hidden">
                Investors, partners and event organisers welcome. Site visits any day.
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <button
              onClick={onRequestInvestorPack}
              className="bg-[#1e2430] hover:bg-[#2c3545] active:scale-[0.98] text-white font-bold text-[16px] px-5 sm:px-6 py-4 rounded-[14px] transition-all duration-200 shadow-sm text-center whitespace-nowrap"
            >
              Request the investor pack
            </button>
            <button
              onClick={onBookSiteVisit}
              className="bg-white hover:bg-[#f3f4f6] active:scale-[0.98] border border-[#e2e4e8] text-[#2a303c] font-bold text-[16px] px-5 sm:px-6 py-4 rounded-[14px] transition-all duration-200 shadow-xs text-center whitespace-nowrap"
            >
              Book a site visit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
