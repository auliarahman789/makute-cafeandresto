import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16">
        <h3 className="text-xl md:text-2xl text-yellow-300 font-medium tracking-wide">
          ABOUT
        </h3>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-extrabold mt-2 text-center px-4 max-w-4xl">
          TENTANG MAK UTE CAFE & RESTO
        </h2>
        <div className="w-24 md:w-36 h-2 bg-yellow-300 mt-3"></div>
      </div>

      {/* First Content Row */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <Image
                src="/about.png"
                alt="Mak Ute Cafe Interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-yellow-300">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <span className="block mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Second Content Row - Reversed on Desktop */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <Image
                src="/about2.png"
                alt="Mak Ute Cafe Atmosphere"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-r-4 border-yellow-300">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vehicula magna quis tortor faucibus, a mattis velit tincidunt.
                Donec convallis fermentum lacus, sit amet tempus erat luctus at.
                <span className="block mt-4">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Nullam ultricies, nulla nec
                  aliquam ultricies, nunc nisl aliquet nunc, eget aliquet nisl
                  nunc eget nunc.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-16">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-xl md:text-2xl text-yellow-300 font-medium tracking-wide">
              LOCATION
            </h3>
            <h2 className="text-xl md:text-2xl text-black font-bold mt-2 text-center">
              FIND US HERE
            </h2>
            <div className="w-16 md:w-24 h-1 bg-yellow-300 mt-2"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Map Container - Updated to Belitung location */}
            <div className="w-full lg:w-3/5 h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Google Maps iframe for Belitung location */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.4138667419493!2d107.6270864!3d-2.6924463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e171528bd2bd65b%3A0xf82633f525ff7a4e!2sMak%20Ute%20Cafe%20%26%20Resto!5e0!3m2!1sen!2sid!4v1745854509890!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mak Ute Cafe & Resto Location"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Location Info - Updated with correct address */}
            <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border-l-4 border-yellow-300">
                <h3 className="text-lg font-bold text-black mb-3">
                  Mak Ute Cafe & Resto
                </h3>

                <div className="flex items-start mb-4">
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-gray-700">
                    Jalan Tanjung Kelayang No.165, Batu Itam, Sijuk, Belitung
                    Regency, Bangka Belitung Islands 33414
                  </p>
                </div>

                <div className="flex items-start mb-4">
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <p className="text-gray-700">+62 821-1346-9090</p>
                </div>

                <div className="flex items-start mb-4">
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-gray-700">
                    <p className="font-medium">Opening Hours:</p>
                    <p className="mt-1">Monday - Friday: 10:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 08:00 AM - 10:00 PM</p>
                  </div>
                </div>

                {/* Added Instagram Link */}
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <a
                    href="https://www.instagram.com/makutecaferesto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
                  >
                    @makutecaferesto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
