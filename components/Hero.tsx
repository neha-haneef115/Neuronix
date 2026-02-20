import { Particles } from "@/components/ui/particles"
import { RippleButton } from "@/components/ui/ripple-button"
export default function Hero() {
  return (
    <section className=" text-white px-20 relative">
      
      <div className="absolute inset-0 overflow-hidden">
        <Particles quantity={30}/>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-10 ">
        <div className="flex items-center space-x-2">
          <img 
            src="/assets/Home/logo.png" 
            alt="DataPulse Logo" 
            className="h-8 w-auto"
          /><span className="text-3xl text-[#EFE5FC] font-bold">Neuronix</span>
        </div>
        
        <div className="hidden text-xs md:flex items-center space-x-15">
          <a href="#" className="text-white hover:text-purple-300 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-purple-300 transition-colors">Our Platform</a>
          <a href="#" className="text-white hover:text-purple-300 transition-colors">Features</a>
          <a href="#" className="text-white hover:text-purple-300 transition-colors">FAQ</a>
          <a href="#" className="text-white hover:text-purple-300 transition-colors">Contact</a>
        </div>
        
        <RippleButton>Contact Us</RippleButton>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-10 text-center font-poppins" style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
        <h1 className="text-5xl leading-[1.1] md:text-[80px] font-bold mb-6 text-[#EFE5FC] font-poppins">
         See Your Data,
         <br />
         <span >Make Smarter Moves</span>
        </h1>
        
        <p className="text-md text-gray-300 max-w-xl mb-12 mt-10 leading-relaxed font-poppins">
          From automation to collaboration, our solution empowers your team to work smarter, not harder. 
          Discover endless possibilities waiting for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-[#AF75FD] hover:bg-[#9C63E7] text-black/90 px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105">
            Get Started Now
          </button>
          <button className="border-1 border-white/90 text-white/90 hover:bg-white/5 hover:text-white px-6 py-3 rounded-full font-medium transition-all">
            Try Tutorial Now
          </button>
        </div>
        
       
      </div>
 
          {/* CIRCLE WRAPPER */}
      <div className="absolute top-140  left-0 w-full h-full pointer-events-none">
        <div className="absolute left-1/2 -top-[2840px] -translate-x-1/2 w-[3000px] h-[3000px] rounded-full 
        bg-transparent " 
       style={{
  boxShadow: `
    inset 0 0 140px #4909aa90,
    inset 0 0 80px #6a07ff99
  `,
  
}}/>

      </div>
    
    </section>
  );
}
