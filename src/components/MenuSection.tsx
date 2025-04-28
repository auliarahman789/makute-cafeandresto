"use client";
import React from "react";
import CardMenu from "./CardMenu";

function MenuSection() {
  // Menu items data
  const menuItems = [
    {
      nama: "KOPI",
      foto: "/cardMenu1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
    {
      nama: "KOPI",
      foto: "/cardMenu2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
    {
      nama: "CHICKEN",
      foto: "/cardMenu3.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
    {
      nama: "KOPI DURIN",
      foto: "/cardMenu4.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
    {
      nama: "MAKANAN",
      foto: "/cardMenu5.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center mb-12">
        <h3 className="text-xl md:text-2xl text-yellow-400 font-medium">
          MENU
        </h3>
        <h2 className="text-3xl md:text-4xl text-black font-bold mt-2">
          MAK UTE CAFE & RESTO
        </h2>
        <div className="w-24 h-2 bg-yellow-400 mt-3"></div>
      </div>

      {/* Fixed grid layout with consistent spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="flex justify-center">
            <CardMenu nama={item.nama} foto={item.foto} desc={item.desc} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MenuSection;
