import Link from "next/link";

const openings = [
  {
    id: 1,
    title: "Licensed Real Estate Agent",
    type: "Full-Time",
    location: "Scottsdale, AZ",
    salary: "$65,000 – $120,000+",
    summary:
      "Join our top-producing team and build your book of business with the support of an established brand, lead pipeline, and mentorship from senior agents.",
    requirements: [
      "Active Arizona Real Estate License",
      "Minimum 1 year of real estate sales experience",
      "Strong communication and negotiation skills",
      "Self-motivated with a client-first mindset",
      "Valid driver's license and reliable transportation",
    ],
  },
  {
    id: 2,
    title: "Property Marketing Coordinator",
    type: "Full-Time",
    location: "Scottsdale, AZ (Hybrid)",
    salary: "$48,000 – $60,000",
    summary:
      "Create compelling property listings, manage social media campaigns, and coordinate professional photography and video walkthroughs to showcase our listings.",
    requirements: [
      "2+ years in real estate or property marketing",
      "Proficiency in Canva, Adobe Creative Suite, or similar",
      "Experience with MLS platforms (ARMLS preferred)",
      "Strong copywriting and visual storytelling skills",
      "Social media marketing experience",
    ],
  },
  {
    id: 3,
    title: "Client Relations Manager",
    type: "Full-Time",
    location: "Phoenix, AZ",
    salary: "$55,000 – $72,000",
    summary:
      "Be the first point of contact for new leads and past clients. You'll coordinate follow-ups, schedule viewings, manage CRM data, and ensure every client feels genuinely cared for.",
    requirements: [
      "3+ years in customer service or client relations",
      "Experience with CRM platforms (HubSpot or similar)",
      "Exceptional verbal and written communication",
      "Highly organized with attention to detail",
      "Real estate industry experience is a plus",
    ],
  },
  {
    id: 4,
    title: "Transaction Coordinator",
    type: "Part-Time",
    location: "Remote (AZ-based)",
    salary: "$28 – $35 / hour",
    summary:
      "Manage all documentation and compliance tasks for active transactions from contract to close. You'll ensure deadlines are met and all parties stay informed throughout the process.",
    requirements: [
      "Experience as a Transaction Coordinator or similar role",
      "Familiarity with Arizona real estate contracts and disclosures",
      "Strong organizational and multitasking skills",
      "Comfortable with DocuSign, Dotloop, or similar platforms",
      "Available 20–25 hours per week",
    ],
  },
];

const benefits = [
  { icon: "💸", title: "Competitive Compensation", desc: "Base salary or commission structures with uncapped earning potential." },
  { icon: "🏥", title: "Health & Dental", desc: "Full-time employees receive comprehensive health and dental coverage." },
  { icon: "📚", title: "Education & Licensing", desc: "We cover continuing education costs and support license upgrades." },
  { icon: "📱", title: "Technology Tools", desc: "Best-in-class CRM, e-signature, and marketing tools provided at no cost." },
  { icon: "🤝", title: "Mentorship Program", desc: "Structured mentorship from our senior agents for your first 90 days." },
  { icon: "🌴", title: "Flexible Schedule", desc: "Agents control their own calendars with flexible and remote options available." },
];

export default function CareersPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-24 px-4 text-center relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,22,40,0.8), #0a1628), url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <p className="section-eyebrow mb-3">Grow With Us</p>
        <h1 className="section-heading text-4xl md:text-5xl mb-4">Join the ABC Team</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We&apos;re always looking for driven, client-focused professionals who want to build a
          rewarding career in Arizona real estate.
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-3">Why ABC Realtors</p>
          <h2 className="section-heading">Benefits of Joining Our Team</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon, title, desc }) => (
            <div key={title} className="bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-gold-500/40 transition-colors">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-navy-800/40 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">We&apos;re Hiring</p>
            <h2 className="section-heading">Open Positions</h2>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.id} className="card p-6 md:p-8 hover:border-gold-500/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white text-xl font-semibold">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs bg-navy-700 border border-navy-600 text-gray-300 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="text-xs bg-navy-700 border border-navy-600 text-gray-300 px-3 py-1 rounded-full">
                        📍 {job.location}
                      </span>
                      <span className="text-xs bg-gold-500/10 border border-gold-500/30 text-gold-400 px-3 py-1 rounded-full">
                        💰 {job.salary}
                      </span>
                    </div>
                  </div>
                  <a
                    href="/availability"
                    className="btn-gold text-sm px-5 py-2.5 whitespace-nowrap flex-shrink-0"
                  >
                    Apply Now
                  </a>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.summary}</p>

                <details className="group">
                  <summary className="text-gold-500 text-sm font-medium cursor-pointer hover:text-gold-400 list-none flex items-center gap-1">
                    <span>View Requirements</span>
                    <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-gold-500 mt-0.5 flex-shrink-0">✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center px-4 py-20">
        <h2 className="section-heading mb-4">Don&apos;t See Your Role?</h2>
        <p className="text-gray-400 text-lg mb-8">
          We&apos;re always interested in meeting talented people. Send us your resume and tell us how
          you&apos;d add value to the ABC Realtors team.
        </p>
        <Link href="/availability" className="btn-gold text-base px-8 py-4">
          Send a General Application
        </Link>
      </section>
    </div>
  );
}
