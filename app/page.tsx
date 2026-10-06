"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { OpenNow } from "@/components/landing/open-now"
import { SixWorlds } from "@/components/landing/six-worlds"
import { OrderingSteps } from "@/components/landing/ordering-steps"
import { Founders } from "@/components/landing/founders"
import { PartnerBanner } from "@/components/landing/partner-banner"
import { Footer } from "@/components/landing/footer"
import { BookPitchModal } from "@/components/landing/modals/book-pitch-modal"
import { MenuModal } from "@/components/landing/modals/menu-modal"
import { InvestorModal } from "@/components/landing/modals/investor-modal"

export default function LandingPage() {
  const [pitchModalOpen, setPitchModalOpen] = useState(false)
  const [menuModalOpen, setMenuModalOpen] = useState(false)
  const [investorModalOpen, setInvestorModalOpen] = useState(false)
  const [investorMode, setInvestorMode] = useState<"investor" | "site_visit">("investor")

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleOpenInvestor = () => {
    setInvestorMode("investor")
    setInvestorModalOpen(true)
  }

  const handleOpenSiteVisit = () => {
    setInvestorMode("site_visit")
    setInvestorModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#2a303c] flex flex-col font-sans selection:bg-[#1f9d55] selection:text-white">
      {/* 01: Top Navigation Bar */}
      <Navbar onBookPitch={() => setPitchModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 02: Hero Section */}
        <Hero
          onSeeOpen={() => scrollToSection("open-now")}
          onPartner={() => scrollToSection("partner")}
        />

        {/* 03: Open Now (Dark Navy High-Contrast Section) */}
        <OpenNow
          onSeeMenu={() => setMenuModalOpen(true)}
          onBookPitch={() => setPitchModalOpen(true)}
        />

        {/* 04: Six Worlds (The 6 Brand Strands) */}
        <SixWorlds />

        {/* 05: How Ordering Works (Cashless 3-step Walkthrough) */}
        <OrderingSteps />

        {/* 06: Founders & Leadership */}
        <Founders />

        {/* 07: Partner & Investor Band */}
        <PartnerBanner
          onRequestInvestorPack={handleOpenInvestor}
          onBookSiteVisit={handleOpenSiteVisit}
        />
      </main>

      {/* 08: Multi-column Brand Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookPitchModal
        isOpen={pitchModalOpen}
        onClose={() => setPitchModalOpen(false)}
      />

      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
      />

      <InvestorModal
        isOpen={investorModalOpen}
        mode={investorMode}
        onClose={() => setInvestorModalOpen(false)}
      />
    </div>
  )
}
