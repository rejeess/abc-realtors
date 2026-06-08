import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Sarah Mitchell",
    title: "Founder & Principal Broker",
    bio: "With 20+ years in Arizona real estate, Sarah built ABC Realtors from the ground up. She specializes in luxury homes and investment portfolios in Scottsdale and Paradise Valley.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    sales: "320+ homes sold",
  },
  {
    name: "James Carter",
    title: "Senior Real Estate Agent",
    bio: "James has deep expertise in first-time homebuyer programs and VA loans. He has helped over 180 families find their first home across the East Valley.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    sales: "180+ homes sold",
  },
  {
    name: "Emily Nguyen",
    title: "Luxury Properties Specialist",
    bio: "Emily's design eye and market knowledge make her the go-to agent for clients seeking premium properties. She consistently ranks in the top 5% of Arizona agents.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    sales: "Top 5% in AZ",
  },
  {
    name: "Marcus Thompson",
    title: "Commercial & Investment Lead",
    bio: "Marcus brings a Wall Street background to Arizona real estate. He advises investors on multi-family, commercial, and short-term rental acquisitions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    sales: "$400M+ in transactions",
  },
];

const milestones = [
  { year: "2009", event: "ABC Realtors founded by Sarah Mitchell in Scottsdale" },
  { year: "2012", event: "Expanded to serve all of Maricopa County" },
  { year: "2015", event: "Reached 100 homes sold milestone" },
  { year: "2018", event: "Opened second office in Gilbert, AZ" },
  { year: "2021", event: "Launched investment property division" },
  { year: "2024", event: "Surpassed $2 billion in total sales volume" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-24 px-4 text-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,22,40,0.75), #0a1628), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="section-eyebrow mb-3">Our Story</p>
        <h1 className="section-heading text-4xl md:text-5xl mb-4">About ABC Realtors</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Since 2009, we&apos;ve been Arizona&apos;s most trusted real estate partner — putting clients
          first, every time.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-eyebrow mb-3">Who We Are</p>
            <h2 className="section-heading mb-6">Built on Trust. Driven by Results.</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                ABC Realtors was founded on a simple belief: buying or selling a home should be
                exciting, not stressful. When Sarah Mitchell opened our doors in 2009, she brought
                a client-first philosophy that has shaped everything we do.
              </p>
              <p>
                Today, our team of 12 licensed agents covers the entire Phoenix Metro area — from
                entry-level homes to multi-million dollar estates. We combine local expertise with
                modern technology to give our clients a competitive edge in any market.
              </p>
              <p>
                Whether you&apos;re a first-time buyer, seasoned investor, or relocating from out of
                state, we have the knowledge and network to make your real estate goals a reality.
              </p>
            </div>
            <Link href="/availability" className="btn-gold mt-8 inline-block">
              Let&apos;s Talk Real Estate
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-navy-700 h-80">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                alt="ABC Realtors office"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-navy-800 border border-gold-500/30 rounded-xl p-4 shadow-xl">
              <div className="text-gold-500 text-2xl font-display font-bold">15+ Years</div>
              <div className="text-gray-400 text-sm">Serving Arizona</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-navy-800/40 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">The People Behind the Sales</p>
            <h2 className="section-heading">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card p-6 text-center hover:border-gold-500/40 transition-colors">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold-500/40">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-gold-500 text-sm mb-3">{member.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <span className="text-xs bg-navy-700 text-gold-400 px-3 py-1 rounded-full border border-gold-500/20">
                  {member.sales}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">Our Journey</p>
          <h2 className="section-heading">Key Milestones</h2>
        </div>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-navy-700" />
          <div className="space-y-8">
            {milestones.map(({ year, event }) => (
              <div key={year} className="flex gap-6 items-start relative">
                <div className="w-14 text-right text-gold-500 font-semibold text-sm pt-1 flex-shrink-0">
                  {year}
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-2 border-navy-900 mt-0.5" />
                </div>
                <div className="bg-navy-800 border border-navy-700 rounded-xl px-5 py-4 flex-1">
                  <p className="text-gray-300 text-sm">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
