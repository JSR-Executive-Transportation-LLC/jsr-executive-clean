export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black relative">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-black/80 border-b border-[#D4AF37]/30">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="JSR Executive Transportation"
            className="h-10 w-auto"
          />
        </a>

        <div className="flex gap-8 text-white text-lg">
          <a href="/" className="hover:text-[#D4AF37] transition">Home</a>
          <a href="/services" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1">Services</a>
          <a href="/fleet" className="hover:text-[#D4AF37] transition">Fleet</a>
          <a href="/contact" className="hover:text-[#D4AF37] transition">Contact</a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center p-6 pt-28">
        <img
          src="/images/services.png"
          alt="JSR Executive Transportation Services"
          className="w-full max-w-7xl rounded-3xl shadow-2xl"
        />
      </section>
    </main>
  );
}