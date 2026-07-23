"use client";

import {
  ShoppingBag,
  Store,
  BadgeIndianRupee,
  Shirt,
  ChevronRight,
} from "lucide-react";

export default function ListingHero() {
  return (
    <section className="w-full bg-[#0d1028] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2d2230] text-[#ffab2d] px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#ffab2d]" />
              E-COMMERCE LISTING SERVICE
            </div>

            {/* Heading */}

            <h1 className="text-white mt-8 text-5xl md:text-6xl font-bold leading-tight">
              List once.
              <br />
              Sell on{" "}
              <span className="text-[#ff9f1c]">
                every
              </span>
              <br />
              marketplace.
            </h1>

            {/* Description */}

            <p className="text-gray-300 text-lg mt-8 max-w-xl leading-9">
              We handle product listing, cataloging and optimization across
              Amazon, Flipkart, Meesho and many other marketplaces, so your
              products stay accurate everywhere.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-[#ff9f1c] hover:bg-orange-500 transition px-8 py-4 rounded-full text-black font-semibold shadow-xl">
                Get a Free Listing Audit
              </button>

              <button className="border border-gray-600 hover:border-orange-400 hover:text-orange-300 transition text-white px-8 py-4 rounded-full flex items-center gap-2">
                See What's Included
                <ChevronRight size={20} />
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-20">

              <div>
                <h2 className="text-white text-4xl font-bold">
                  5+
                </h2>
                <p className="text-gray-400 mt-2">
                  Years in Business
                </p>
              </div>

              <div>
                <h2 className="text-white text-4xl font-bold">
                  13
                </h2>
                <p className="text-gray-400 mt-2">
                  Marketplaces
                </p>
              </div>

              <div>
                <h2 className="text-white text-4xl font-bold">
                  24×7
                </h2>
                <p className="text-gray-400 mt-2">
                  Catalog Monitoring
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center items-center min-h-[600px]">

            {/* Product Card */}

            <div className="relative z-20 bg-white rounded-3xl shadow-2xl w-64 p-5">

              <div className="absolute -top-3 right-5 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                Listing...
              </div>

              <div className="h-36 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-300" />

              <h3 className="mt-5 font-bold text-xl text-gray-900">
                Cotton Kurta Set
              </h3>

              <p className="text-gray-500 mt-1">
                SKU LB-2291
              </p>

            </div>

            {/* SVG Dotted Lines */}

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 700 600"
            >
              {[
                120,
                210,
                300,
                390,
                480,
              ].map((y, i) => (
                <path
                  key={i}
                  d={`M340 ${300} Q470 ${y} 610 ${y}`}
                  stroke="#d88a1d"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="8 8"
                />
              ))}
            </svg>

            {/* Marketplace Cards */}

            <div className="absolute top-14 right-0 bg-[#161b40] border border-[#2f3769] rounded-2xl px-6 py-4 flex items-center gap-3 text-white shadow-lg hover:scale-105 transition">
              <ShoppingBag className="text-orange-400" size={18} />
              Amazon
            </div>

            <div className="absolute top-36 right-[-30px] bg-[#161b40] border border-[#2f3769] rounded-2xl px-6 py-4 flex items-center gap-3 text-white shadow-lg hover:scale-105 transition">
              <Store className="text-blue-500" size={18} />
              Flipkart
            </div>

            <div className="absolute top-60 right-0 bg-[#161b40] border border-[#2f3769] rounded-2xl px-6 py-4 flex items-center gap-3 text-white shadow-lg hover:scale-105 transition">
              <BadgeIndianRupee className="text-pink-500" size={18} />
              Meesho
            </div>

            <div className="absolute bottom-36 right-6 bg-[#161b40] border border-[#2f3769] rounded-2xl px-6 py-4 flex items-center gap-3 text-white shadow-lg hover:scale-105 transition">
              <ShoppingBag className="text-cyan-400" size={18} />
              Tata Cliq
            </div>

            <div className="absolute bottom-16 right-20 bg-[#161b40] border border-[#2f3769] rounded-2xl px-6 py-4 flex items-center gap-3 text-white shadow-lg hover:scale-105 transition">
              <Shirt className="text-yellow-400" size={18} />
              Ajio
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}