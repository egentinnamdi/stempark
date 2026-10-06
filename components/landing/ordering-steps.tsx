"use client"

import React from "react"

export function OrderingSteps() {
  const steps = [
    {
      num: "01",
      title: "Scan the table QR",
      desc: "Your phone opens the menu with your table number already set.",
    },
    {
      num: "02",
      title: "Order and pay first",
      desc: "Card, transfer or USSD via Paystack. The kitchen starts only when it is paid.",
    },
    {
      num: "03",
      title: "We bring it to you",
      desc: "A runner delivers to your table and you confirm everything arrived.",
    },
  ]

  return (
    <section id="how-it-works" className="w-full bg-white py-16 lg:py-20 border-y border-[#e2e4e8]/60">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 xl:px-28">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-9 lg:mb-12">
          <h2 className="font-heading font-extrabold text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#2a303c]">
            Order without talking to anyone.
          </h2>
          <p className="font-body font-medium text-[15px] sm:text-[17px] text-[#636b78]">
            No app download. One quick phone login. No cash.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#f7f6f3] rounded-[20px] p-7 flex flex-col space-y-3.5 transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]"
            >
              <span className="font-mono font-bold text-[15px] text-[#1f9d55]">
                {step.num}
              </span>
              <h3 className="font-heading font-extrabold text-[22px] sm:text-[24px] text-[#2a303c] leading-tight">
                {step.title}
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] leading-[1.5] text-[#636b78]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
