export default function Footer() {
  return (
    <footer id="Contact" className="relative bg-[#0a0416] overflow-hidden">
      {/* Background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[220px] font-extrabold tracking-tight text-white/5 select-none">
         
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Navigation */}
          <nav className="flex gap-10 text-sm text-white/70">
            <a className="hover:text-white transition" href="#">Home</a>
            <a className="hover:text-white transition" href="#">Our Platform</a>
            <a className="hover:text-white transition" href="#">Features</a>
            <a className="hover:text-white transition" href="#">FAQ</a>
            <a className="hover:text-white transition" href="#">Contact</a>
          </nav>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { label: "f" },
              { label: "in" },
              { label: "ig" },
              { label: "x" },
            ].map((item) => (
              <div
                key={item.label}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-sm text-white/60 hover:text-white hover:border-white/40 transition cursor-pointer"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>© 2026 Neuronix. All rights reserved</span>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}