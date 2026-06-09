import Image from "next/image";
import Link from "next/link";

const featuredListings = [
  {
    id: 1,
    title: "Oakwood Estate",
    address: "142 Oakwood Drive, Crystalvale, EL",
    price: "$875,000",
    type: "sale",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: 2,
    title: "Sunset Villa",
    address: "55 Sunset Ridge, Mistvale, EL",
    price: "$1,450,000",
    type: "sale",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    id: 3,
    title: "Modern Skyview",
    address: "901 Skyview Blvd #12A, Solhaven, EL",
    price: "$3,200/mo",
    type: "rent",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
];

const stats = [
  { value: "500+", label: "Homes Sold" },
  { value: "15", label: "Years in Business" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$2B+", label: "Total Sales Volume" },
];

const services = [
  {
    icon: "🏡",
    title: "Buy a Home",
    desc: "Expert guidance from first look to closing day. We know every neighborhood in the region.",
  },
  {
    icon: "💰",
    title: "Sell Your Property",
    desc: "Strategic pricing, professional photography, and a proven marketing system to maximize your sale.",
  },
  {
    icon: "🔑",
    title: "Rent & Lease",
    desc: "Curated rental listings from studios to luxury homes. Find the right fit for your lifestyle.",
  },
  {
    icon: "📈",
    title: "Investment Properties",
    desc: "Identify high-yield investment opportunities backed by local market data and analysis.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center pt-16"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.85) 60%, #0a1628 100%), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="section-eyebrow mb-4">Welcome to ABC Realtors</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Find Your <span className="text-gold-500">Dream Home</span>
            <br />in Eldoria
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            From cozy family homes to luxury estates, ABC Realtors has guided
            Eldoria families and investors for over 15 years. Let us find your
            perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings" className="btn-gold text-base px-8 py-4">
              Browse Listings
            </Link>
            <Link href="/availability" className="btn-outline text-base px-8 py-4">
              Schedule a Viewing
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold-500 opacity-70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-gold-500">{value}</div>
                <div className="text-gray-400 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">Hand-Picked Properties</p>
          <h2 className="section-heading">Featured Listings</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredListings.map((p) => (
            <div key={p.id} className="card group hover:border-gold-500/50 transition-colors">
              <div className="relative h-56 overflow-hidden">
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
              <div className="p-5">
                <div className="text-gold-500 text-xl font-bold mb-1">{p.price}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.address}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 border-t border-navy-700 pt-4">
                  <span>🛏 {p.beds} Beds</span>
                  <span>🚿 {p.baths} Baths</span>
                  <span>📐 {p.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/listings" className="btn-outline">
            View All Properties
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">What We Do</p>
            <h2 className="section-heading">Full-Service Real Estate</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-gold-500/40 transition-colors"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="rounded-2xl text-center p-12 md:p-16 relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(10,22,40,0) 60%), linear-gradient(to right, #0d1e35, #112540)",
            borderImage: "linear-gradient(135deg, #c9a84c, #1a3255) 1",
          }}
        >
          <div className="absolute inset-0 border border-gold-500/20 rounded-2xl pointer-events-none" />
          <p className="section-eyebrow mb-4">Your Next Chapter Starts Here</p>
          <h2 className="section-heading mb-4">Ready to Make a Move?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Our expert agents are standing by to help you buy, sell, or rent.
            Schedule a no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/availability" className="btn-gold text-base px-8 py-4">
              Book a Free Consultation
            </Link>
            <Link href="/about" className="btn-outline text-base px-8 py-4">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
