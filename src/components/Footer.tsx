"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer with Gradient Background */}
      <div className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 py-12 px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Location Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <Image
                className="rounded-full shadow-lg border-2 border-yellow-400"
                width={90}
                height={90}
                src="/icon1.jpg"
                alt="Mak Ute logo"
              />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">
              MAK UTE CAFE & RESTO
            </p>
            <p className="text-lg md:text-xl font-semibold text-yellow-600 mt-1">
              SIJUK, INDONESIA
            </p>
            <div className="w-24 md:w-32 h-1 bg-yellow-400 mt-3"></div>
          </div>

          {/* Contact and Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
            {/* Address & Hours Column */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-yellow-500"
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
                Find Us
              </h3>

              <p className="text-gray-700 mb-4 pl-2 border-l-2 border-yellow-300">
                Jalan Tanjung Kelayang No.165, Batu Itam, Sijuk, Belitung
                Regency, Bangka Belitung Islands 33414
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-yellow-500"
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
                Opening Hours
              </h4>
              <div className="pl-2 border-l-2 border-yellow-300">
                <p className="text-gray-700">EVERYDAY : 10:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* Contact and Links Column */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Contact Us
              </h3>

              <div className="space-y-4 pl-2 border-l-2 border-yellow-300">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <a
                    href="tel:+6282113469090"
                    className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                  >
                    +62 821-1346-9090
                  </a>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500"
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
                    className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                  >
                    @makutecaferesto
                  </a>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h.01a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="https://wa.me/6282113469090"
                    className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Quick Links
              </h4>
              <div className="space-y-2 pl-2 border-l-2 border-yellow-300">
                <a
                  className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                  href="#menu"
                >
                  Our Menu
                </a>
                <a
                  className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                  href="#testimoni"
                >
                  Testimonials
                </a>
                <a
                  className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                  href="https://maps.app.goo.gl/MLhuwBhEby4RBSck7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map Column */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                    clipRule="evenodd"
                  />
                </svg>
                Our Location
              </h3>
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
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
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 my-8">
            <a
              href="https://www.instagram.com/makutecaferesto/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://wa.me/6282113469090"
              className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              aria-label="WhatsApp"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="tel:+6282113469090"
              className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              aria-label="Phone"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section with Enhanced Design */}
      <div className="bg-gradient-to-r from-black to-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-sm font-medium">
            © 2025 MAK UTE CAFE & RESTO - ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
