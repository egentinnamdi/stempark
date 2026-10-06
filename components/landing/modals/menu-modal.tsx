"use client"

import React from "react"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  if (!isOpen) return null

  const categories = [
    {
      category: "Grills & Mains",
      items: [
        { name: "Charcoal Grilled Suya Platter", price: "₦6,500", desc: "Spiced beef strips with fresh onions, cabbage and roasted peppers" },
        { name: "Smoked Peppered Catfish", price: "₦9,000", desc: "Whole fresh catfish slow-smoked and glazed in scotch bonnet sauce" },
        { name: "Life Camp Signature Jollof & Asun", price: "₦5,800", desc: "Party jollof rice served with peppered goat meat and fried plantains" },
        { name: "Stem Park Grilled Chicken", price: "₦7,200", desc: "Half chicken marinated overnight in West African herbs" },
      ],
    },
    {
      category: "Soups & Swallows",
      items: [
        { name: "Fisherman Soup with Fresh Prawns", price: "₦8,500", desc: "Rich seafood broth served with choice of pounded yam or semo" },
        { name: "Efo Riro Elegusi", price: "₦7,000", desc: "Assorted meat and stockfish stewed with fresh spinach and melon seeds" },
      ],
    },
    {
      category: "Drinks & Refreshments",
      items: [
        { name: "Classic Chapman Pitcher", price: "₦4,500", desc: "Angostura bitters, Fanta, Sprite and cucumber slices" },
        { name: "Zobo Hibiscus Splash", price: "₦2,500", desc: "Chilled organic hibiscus infused with ginger, cloves and pineapple" },
        { name: "Fresh Palm Wine", price: "₦3,500", desc: "Tapped fresh, chilled and served straight from the calabash" },
      ],
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#ffffff] text-[#2a303c] rounded-[24px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#e2e4e8] relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#636b78] hover:text-[#2a303c] p-2 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="space-y-1.5 mb-6 border-b border-[#e2e4e8] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#eb3228]" />
            <span className="font-mono font-bold text-[12px] text-[#eb3228] uppercase tracking-[0.5px]">
              WORLD 01 · EAT
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-[28px] sm:text-[32px] text-[#2a303c] leading-tight">
            Outdoor Restaurant Menu
          </h3>
          <p className="font-body text-[14px] text-[#636b78]">
            Scan table QR · Pay before preparation via Paystack · Delivered right to your table
          </p>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat.category} className="space-y-3">
              <h4 className="font-mono font-bold text-[13px] text-[#1f9d55] uppercase tracking-wider">
                {cat.category}
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 bg-[#f7f6f3] rounded-[16px] flex justify-between items-start gap-4"
                  >
                    <div>
                      <div className="font-heading font-bold text-[16px] text-[#2a303c]">
                        {item.name}
                      </div>
                      <div className="font-body text-[13px] text-[#636b78] mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                    <span className="font-mono font-bold text-[15px] text-[#1f9d55] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-[#e2e4e8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#636b78]">
          <span>Open Daily · 12:00 PM – 11:00 PM</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-[#1e2430] hover:bg-[#2c3545] text-white font-bold px-6 py-2.5 rounded-[12px] transition-all"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  )
}
