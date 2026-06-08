import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold text-gold-500">ABC</span>
              <span className="text-white font-semibold text-lg">Realtors</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arizona&apos;s trusted real estate partner since 2009. Helping families find their
              perfect home across the Valley.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { href: "/", label: "Home" },
                { href: "/listings", label: "Browse Listings" },
                { href: "/about", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/availability", label: "Schedule a Viewing" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Buy a Home", "Sell Your Property", "Rent & Lease", "Investment Properties", "Commercial Real Estate", "Property Management"].map((s) => (
                <li key={s} className="hover:text-gold-400 transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">📍</span>
                <span>4820 E Camelback Rd, Suite 200<br />Scottsdale, AZ 85251</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-500">📞</span>
                <span>(480) 555-0182</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-500">✉️</span>
                <span>hello@abcrealtors.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-500">🕐</span>
                <span>Mon–Sat: 8am – 7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ABC Realtors LLC. All rights reserved.</p>
          <p>Licensed in Arizona | DRE #SA699543000</p>
        </div>
      </div>
    </footer>
  );
}
