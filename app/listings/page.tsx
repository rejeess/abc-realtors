"use client";

import { useState } from "react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Oakwood Estate",
    address: "142 Oakwood Drive, Crystalvale, EL 10251",
    price: "$875,000",
    type: "sale",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    garage: 2,
    year: 2018,
    desc: "Stunning single-family home in the heart of Crystalvale. Features an open-concept kitchen, resort-style pool, and mountain views.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: 2,
    title: "Sunset Villa",
    address: "55 Sunset Ridge, Mistvale, EL 10253",
    price: "$1,450,000",
    type: "sale",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    garage: 3,
    year: 2020,
    desc: "Luxury estate in Mistvale with panoramic sunset views, chef's kitchen, home theater, and private tennis court.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    id: 3,
    title: "Modern Skyview",
    address: "901 Skyview Blvd #12A, Solhaven, EL 10004",
    price: "$3,200/mo",
    type: "rent",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    garage: 1,
    year: 2021,
    desc: "Contemporary high-rise condo with floor-to-ceiling windows, city views, and access to rooftop pool and gym.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 4,
    title: "Heritage Manor",
    address: "22 Heritage Lane, Fernbrook, EL 10296",
    price: "$980,000",
    type: "sale",
    beds: 4,
    baths: 3.5,
    sqft: "3,200",
    garage: 2,
    year: 2016,
    desc: "Traditional elegance meets modern comfort. Formal dining, butler's pantry, spacious backyard with covered patio.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    id: 5,
    title: "The Palms",
    address: "300 Palm Court Drive, Riverstone, EL 10225",
    price: "$2,800/mo",
    type: "rent",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    garage: 2,
    year: 2019,
    desc: "Beautifully updated home in a gated community. Granite counters, smart home features, resort-style community amenities.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
  },
  {
    id: 6,
    title: "Riverside Cottage",
    address: "78 River Bend Road, Ashford, EL 10281",
    price: "$525,000",
    type: "sale",
    beds: 3,
    baths: 2,
    sqft: "1,640",
    garage: 1,
    year: 2008,
    desc: "Charming cottage near Ashford Lake. Hardwood floors, updated kitchen, private backyard garden oasis.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 7,
    title: "Crestview Heights",
    address: "8 Crestview Boulevard, Crystalvale, EL 10254",
    price: "$2,100,000",
    type: "sale",
    beds: 6,
    baths: 5,
    sqft: "5,400",
    garage: 4,
    year: 2022,
    desc: "Architectural masterpiece at the top of Crestview. Infinity pool, wine cellar, 4-car garage, smart home automation.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: 8,
    title: "Downtown Loft",
    address: "400 Main Street #5B, Solhaven, EL 10003",
    price: "$1,900/mo",
    type: "rent",
    beds: 1,
    baths: 1,
    sqft: "780",
    garage: 1,
    year: 2020,
    desc: "Industrial-chic loft in the heart of downtown Solhaven. Exposed brick, high ceilings, walking distance to dining and nightlife.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
];

export default function ListingsPage() {
  const [filter, setFilter] = useState<"all" | "sale" | "rent">("all");

  const filtered = filter === "all" ? properties : properties.filter((p) => p.type === filter);

  return (
    <div className="pt-16">
      {/* Header */}
      <section
        className="py-20 px-4 text-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,22,40,0.8), #0a1628), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="section-eyebrow mb-3">Browse Properties</p>
        <h1 className="section-heading text-4xl md:text-5xl mb-4">Property Listings</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Explore homes for sale and rent across Crystalvale, Solhaven, Ashford, Riverstone, Fernbrook, and Mistvale.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-3 mb-8">
          {(["all", "sale", "rent"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${
                filter === f
                  ? "bg-gold-500 text-navy-900"
                  : "bg-navy-800 text-gray-300 border border-navy-700 hover:border-gold-500/50"
              }`}
            >
              {f === "all" ? "All Properties" : f === "sale" ? "For Sale" : "For Rent"}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500 self-center">
            {filtered.length} propert{filtered.length !== 1 ? "ies" : "y"}
          </span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="card group hover:border-gold-500/40 transition-colors flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  {p.type === "sale" ? (
                    <span className="badge-sale">For Sale</span>
                  ) : (
                    <span className="badge-rent">For Rent</span>
                  )}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="text-gold-500 text-xl font-bold mb-1">{p.price}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{p.address}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 border-t border-navy-700 pt-4">
                  <span>🛏 {p.beds} Beds</span>
                  <span>🚿 {p.baths} Baths</span>
                  <span>📐 {p.sqft} sqft</span>
                  <span>🚗 {p.garage}-car</span>
                </div>

                <a
                  href="/availability"
                  className="mt-4 w-full text-center btn-gold text-sm block"
                >
                  Schedule Viewing
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy-800/50 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="section-heading mb-4">Not finding the right fit?</h2>
          <p className="text-gray-400 mb-8">
            Tell us what you&apos;re looking for and we&apos;ll personally curate a list of properties that match your needs and budget.
          </p>
          <a href="/availability" className="btn-gold text-base px-8 py-4">
            Talk to an Agent
          </a>
        </div>
      </section>
    </div>
  );
}
