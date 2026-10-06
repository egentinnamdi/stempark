"use client"

import React, { useState } from "react"

interface InvestorModalProps {
  isOpen: boolean
  mode: "investor" | "site_visit"
  onClose: () => void
}

export function InvestorModal({ isOpen, mode, onClose }: InvestorModalProps) {
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const isVisit = mode === "site_visit"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#ffffff] text-[#2a303c] rounded-[24px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#e2e4e8] relative animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#636b78] hover:text-[#2a303c] p-2 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#e3f4ea] text-[#1f9d55] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="font-heading font-extrabold text-[26px] text-[#2a303c]">
              {isVisit ? "Site Visit Booked" : "Investor Pack Dispatched"}
            </h3>
            <p className="font-body text-[15px] text-[#636b78] max-w-sm mx-auto">
              {isVisit
                ? "Our partnerships team will reach out to schedule your guided tour of STEM PARK Life Camp."
                : "Thank you for your interest. We will email the Phase 1 executive summary and pitch deck to your inbox."}
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="mt-4 bg-[#1e2430] text-white font-bold px-6 py-3 rounded-[14px] hover:bg-[#2c3545] transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="space-y-1.5 mb-6">
              <span className="font-mono font-bold text-[12px] text-[#1f9d55] uppercase tracking-[0.5px]">
                PARTNERSHIP · LIFE CAMP ABUJA
              </span>
              <h3 className="font-heading font-extrabold text-[28px] text-[#2a303c] leading-tight">
                {isVisit ? "Book a Site Visit" : "Request Investor Pack"}
              </h3>
              <p className="font-body text-[14px] text-[#636b78]">
                {isVisit
                  ? "Experience the construction & live worlds firsthand at Life Camp, Abuja."
                  : "Receive our Phase 1 investment deck, unit economics, and roll-out schedule."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body font-medium text-[13px] text-[#2a303c] mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Amina Bello"
                  className="w-full px-4 py-3 rounded-[12px] border border-[#e2e4e8] bg-[#f7f6f3] text-[15px] focus:outline-none focus:border-[#1f9d55]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-body font-medium text-[13px] text-[#2a303c] mb-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-[12px] border border-[#e2e4e8] bg-[#f7f6f3] text-[15px] focus:outline-none focus:border-[#1f9d55]"
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-[13px] text-[#2a303c] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="080..."
                    className="w-full px-4 py-3 rounded-[12px] border border-[#e2e4e8] bg-[#f7f6f3] text-[15px] focus:outline-none focus:border-[#1f9d55]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-[13px] text-[#2a303c] mb-1">
                  Interested in
                </label>
                <select
                  defaultValue={isVisit ? "visit" : "investor"}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#e2e4e8] bg-[#f7f6f3] text-[15px] focus:outline-none focus:border-[#1f9d55]"
                >
                  <option value="investor">Angel / Venture Investment</option>
                  <option value="corporate">Corporate Partnership / Sponsorship</option>
                  <option value="events">Event Venue Rental / Tournaments</option>
                  <option value="visit">Private Site Tour & Briefing</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1f9d55] hover:bg-[#188346] active:scale-[0.98] text-white font-bold text-[16px] py-4 rounded-[14px] transition-all shadow-sm"
                >
                  {isVisit ? "Schedule Site Tour" : "Send Investor Pack"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
