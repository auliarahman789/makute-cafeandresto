import AboutUs from "@/components/AboutUs";
import { Component } from "@/components/FirstCaroulsel";
import Galery from "@/components/Galery";
import Heroes from "@/components/Heroes";
import MenuSection from "@/components/MenuSection";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <main>
      <main
        className="flex  min-h-screen  flex-col bg-white backdrop-blur-md"
        id="/"
      >
        <Heroes />
      </main>
      <main
        className="flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="about"
      >
        <AboutUs />

      </main>
      <main
        className="flex  min-h-screen max-w-screen flex-col bg-white px-4 py-4 backdrop-blur-md gap-10"
        id="kegiatan"
      >
        <div className="flex flex-wrap justify-center items-center">
          <div className=" flex flex-col justify-center text-center items-center ">
            <h1 className="text-[24px] text-yellow-300  font-medium">
              EVENTS
            </h1>
            <h1 className="text-[34px] text-black  font-extrabold">
              KEGIATAN
            </h1>
            <div className="w-[80%] h-3 bg-yellow-300  font-extrabold">

            </div>
          </div>
        </div>
        <div className="flex  min-h-screen max-w-screen flex-col bg-white rounded-md pt-10">
          <Component />
        </div>
      </main>
      <main
        className="flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="menu"
      >
        <MenuSection />
      </main>
      <main
        className="flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="testimoni"
      >
        <Testimoni />
      </main>
      <main
        className="flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="galeri"
      >
        <Galery />
      </main>
    </main>
  );
}
