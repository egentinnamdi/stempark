"use client"

import React, { useState } from "react"

interface BookPitchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookPitchModal({ isOpen, onClose }: BookPitchModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [timeSlot, setTimeSlot] = useState("18:00 - 19:00")

  if (!isOpen) return null

  const slots = [
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
    "21:00 - 22:00",
  ]

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
              Booking Request Received
            </h3>
            <p className="font-body text-[15px] text-[#636b78] max-w-sm mx-auto">
              We&apos;ve reserved your preferred slot ({timeSlot}). Our pitch coordinator will
              contact you via WhatsApp/SMS with your Paystack payment link.
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
                WORLD 02 · PLAY
              </span>
              <h3 className="font-heading font-extrabold text-[28px] text-[#2a303c] leading-tight">
                Book Football Pitch
              </h3>
              <p className="font-body text-[14px] text-[#636b78]">
                Floodlit turf in Life Camp, Abuja. From ₦25,000/hr · Floodlights, bibs & balls included.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body font-medium text-[13px] text-[#2a303c] mb-1">
                  Team or Captain Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Abuja Tech FC"
                  className="w-full px-4 py-3 rounded-[12px] border border-[#e2e4e8] bg-[#f7f6f3] text-[15px] focus:outline-none focus:border-[#1f9d55]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
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
                <div>
                  <label className="block font-body font-medium text-[13px] text-[#2a303c] mb-1">
                    Date
                  </label>
                  <input
                    required
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-[12px] border border-[#e2e4e8] bg-[#f7f6f3] text-[15px] focus:outline-none focus:border-[#1f9d55]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-[13px] text-[#2a303c] mb-1">
                  Select Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3 rounded-[12px] border border-[#e2e4e8] bg-[#f7f6f3] text-[15px] focus:outline-none focus:border-[#1f9d55]"
                >
                  {slots.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1f9d55] hover:bg-[#188346] active:scale-[0.98] text-white font-bold text-[16px] py-4 rounded-[14px] transition-all shadow-sm"
                >
                  Confirm & Reserve Slot
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
