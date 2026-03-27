import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  return (
    <footer
      id="Contact"
      style={{
        position: "relative",
        background: "#09011e",
        overflow: "hidden",
        
      }}className="font-poppins"
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
    { label: "Home", highlight: true, id: "Home" },
    { label: "Our Platform", id: "OurPlatform" },
    { label: "Features", id: "Features" },
    { label: "FAQ", id: "FAQ" },
    { label: "Contact", id: "Contact" },
  ].map((item) => (
    <a
      key={item.label}
      href={`#${item.id}`}
      style={{
        fontSize: 12.5,
        color: item.highlight ? "#9C63E7" : "#EFE5FC",
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
            fontSize: 16,
            color: "#c3b5f3",
            margin: "22px 0 42px",
            letterSpacing: "0.01em",
          }}className="font-poppins"
        >
         Smart financial tools that help businesses operate securely, stay reliable, and grow with confidence.
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 40, color:"#c3b5f3",marginBottom: 76,fontSize: 34 }}>
          {/* Facebook */}
          <a href="#" style={iconStyle}>
           <FaSquareFacebook />
          </a>
          {/* LinkedIn */}
          <a href="#" style={iconStyle}>
           <FaLinkedin />
          </a>
          {/* Instagram */}
          <a href="#" style={iconStyle}>
           <AiFillInstagram />
          </a>
          {/* X */}
          <a href="#" style={iconStyle}>
           <BsTwitterX />
          </a>
        </div>

        

        {/* Bottom bar */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 4 }}>
          <span style={{ fontSize: 11.5, color: "#BAA6E2" }}>
            © 2024 Neuronix. All rights reserved
          </span>
          <a href="#" style={{ fontSize: 15, color: "#BAA6E2", textDecoration: "none" }}>
            Privacy Policy
          </a>
          <a href="#" style={{ fontSize: 15, color: "#BAA6E2", textDecoration: "none" }}>
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
  
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  cursor: "pointer",
};