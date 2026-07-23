"use client";

const features = [
  "Bulk listing across every connected marketplace from one product sheet.",
  "SEO-ready titles, bullet points, and backend keywords per platform.",
  "Image, price, and stock sync so nothing ever goes out of date.",
  "Category mapping and compliance checks before you go live.",
  "A dedicated catalog manager who actually replies.",
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="uppercase tracking-[3px] text-[#c57a11] font-semibold text-sm mb-5">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0b1638] leading-tight">
              The industry's leading e-commerce listing partner.
            </h2>

            <div className="mt-8 space-y-7 text-[#4b587c] text-lg leading-9">

              <p>
                We are <strong className="text-[#0b1638]">one of the best product listing companies</strong> for Amazon,
                Flipkart, Meesho, Tata Cliq, Snapdeal, Tata 1mg,
                Etsy, Big Basket, JioMart, Ajio, Ebay, FirstCry,
                Pepperfry, Voonik and Paytm Mall. You can rely on us
                for product listing on ecommerce platforms.
              </p>

              <p>
                <strong className="text-[#0b1638]">
                  E-Commerce Consultant
                </strong>{" "}
                has been around for{" "}
                <strong className="text-[#0b1638]">
                  over 5 years.
                </strong>{" "}
                With our experience in this field, we know exactly
                what it takes to keep your e-commerce business
                running smoothly and efficiently.
              </p>

              <p>
                Whichever portal your buyers shop on, your catalog
                shows up correct, complete, and conversion-ready —
                <strong className="text-[#0b1638]">
                  {" "}
                  every single time.
                </strong>
              </p>

            </div>

            <button className="mt-12 bg-[#0d1232] hover:bg-[#151d48] transition-all duration-300 text-white px-9 py-4 rounded-full font-semibold shadow-lg hover:scale-105">
              Learn More
            </button>

          </div>

          {/* Right Side */}

          <div>

            <div className="bg-[#fbf8f2] border border-[#e7dfcf] rounded-3xl p-6 md:p-8 shadow-sm">

              {features.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-6 py-7 ${
                    index !== features.length - 1
                      ? "border-b border-[#e3dac8]"
                      : ""
                  }`}
                >

                  <div className="text-[#c57a11] font-bold text-lg min-w-[40px]">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <p className="text-[#17234d] text-lg leading-8 hover:text-[#ff9800] transition-colors duration-300">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}