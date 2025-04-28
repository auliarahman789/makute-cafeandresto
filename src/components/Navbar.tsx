// Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
  const [scrollLocation, setScrollLocation] = useState(0);
  const [prevScrollLocation, setPrevScrollLocation] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollLocation = window.scrollY;
      setScrollLocation(currentScrollLocation);

      if (currentScrollLocation < prevScrollLocation) {
        setScrollDirection("up");
      } else if (currentScrollLocation > prevScrollLocation) {
        setScrollDirection("down");
      }

      setPrevScrollLocation(currentScrollLocation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollLocation]);

  return (
    <div className="fixed w-full z-50">
      <div
        className={`w-full transition-all duration-300 ease-in-out
          ${
            scrollLocation >= 100
              ? "bg-white shadow-md py-2"
              : "bg-gradient-to-b from-black/70 to-transparent py-4"
          }
          ${
            scrollLocation >= 380 && scrollDirection === "down"
              ? "-translate-y-[90px]"
              : ""
          }
        `}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              className="rounded-full shadow-md"
              width={60}
              height={60}
              src="/icon1.jpg"
              alt="Mak Ute logo"
            />
            <span
              className={`ml-3 font-bold text-lg ${
                scrollLocation >= 100 ? "text-black" : "text-white"
              }`}
            >
              Mak Ute
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-3 md:gap-8 items-center">
            {["EVENTS", "MENU", "TESTIMONY"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`relative font-medium text-sm md:text-base transition-colors duration-300 
                  ${
                    scrollLocation >= 100
                      ? "text-black hover:text-yellow-400"
                      : "text-white hover:text-yellow-300"
                  }
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-300 
                  after:left-0 after:-bottom-1 after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {item}
              </a>
            ))}

            {/* Contact Us Button */}
            <a
              href="https://wa.me/6282113469090"
              className={`hidden md:block px-4 py-2 rounded-md transition-all duration-300
                ${
                  scrollLocation >= 100
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-yellow-300 text-black hover:bg-yellow-400"
                }
                font-medium text-sm
              `}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
