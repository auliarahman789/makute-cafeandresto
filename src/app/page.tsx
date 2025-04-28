// Home.js
import AboutUs from "@/components/AboutUs";
import EventCarousel from "@/components/FirstCaroulsel";
import Gallery from "@/components/Galery";
import Hero from "@/components/Heroes";
import MenuSection from "@/components/MenuSection";
import Testimonials from "@/components/Testimoni";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section id="/" className="min-h-screen">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about" className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
        <AboutUs />
      </section>

      {/* Events Section */}
      <section
        id="kegiatan"
        className="min-h-screen py-16 px-4 md:px-8 lg:px-16"
      >
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-xl md:text-2xl text-yellow-300 font-medium tracking-wide">
            EVENTS
          </h3>
          <h2 className="text-3xl md:text-4xl text-black font-extrabold mt-2">
            KEGIATAN
          </h2>
          <div className="w-24 md:w-36 h-2 bg-yellow-300 mt-3"></div>
        </div>

        <div className="mt-10">
          <EventCarousel />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
        <MenuSection />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimoni"
        className="min-h-screen py-16 px-4 md:px-8 lg:px-16"
      >
        <Testimonials />
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
        <Gallery />
      </section>
    </main>
  );
}
