export default function Footer() {
  return (
    <footer
      id="Contact"
      style={{
        position: "relative",
        background: "#09011e",
        overflow: "hidden",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* ── Massive solid-fill watermark ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: "20vw",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            color: "#150730",   /* solid fill — slightly lighter than bg, same purple hue */
            WebkitTextStroke: "0px transparent",
          }}
        >
          Neuronix
        </span>
      </div>

      {/* ── All content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "44px 40px 24px",
        }}
      >
        {/* Nav */}
        <nav style={{ display: "flex", gap: 36, marginBottom: 22 }}>
          {[
            { label: "Home", highlight: true },
            { label: "Our Platform", bold: true },
            { label: "Features" },
            { label: "FAQ" },
            { label: "Contact" },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              style={{
                fontSize: 12.5,
                fontWeight: item.bold ? 600 : 400,
                color: item.highlight
                  ? "#9C63E7"
                  : "#EFE5FC",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Tagline */}
        <p
          style={{
            fontSize: 12.5,
            color: "#EFE5FC",
            margin: "0 0 22px",
            letterSpacing: "0.01em",
          }}
        >
         Smart financial tools that help businesses operate securely, stay reliable, and grow with confidence.
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
          {/* Facebook */}
          <a href="#" style={iconStyle}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#EFE5FC">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" style={iconStyle}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#EFE5FC">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" style={iconStyle}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#EFE5FC">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* X */}
          <a href="#" style={iconStyle}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#EFE5FC">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
          </a>
        </div>

        

        {/* Bottom bar */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 4 }}>
          <span style={{ fontSize: 11.5, color: "#EFE5FC" }}>
            © 2024 Neuronix. All rights reserved
          </span>
          <a href="#" style={{ fontSize: 11.5, color: "#EFE5FC", textDecoration: "none" }}>
            Privacy Policy
          </a>
          <a href="#" style={{ fontSize: 11.5, color: "#EFE5FC", textDecoration: "none" }}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

const iconStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "rgba(156,99,231,0.15)",
  border: "1px solid rgba(156,99,231,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  cursor: "pointer",
};