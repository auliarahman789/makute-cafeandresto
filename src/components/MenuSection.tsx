"use client";
import React, { useState } from "react";
import CardMenu from "./CardMenu";

function MenuSection() {
  const [showAllItems, setShowAllItems] = useState(false);

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
    {
      nama: "KOPI",
      foto: "/menu6.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
    {
      nama: "KOPI",
      foto: "/menu7.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
    {
      nama: "KOPI & CROISSANT",
      foto: "/menu8.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
    {
      nama: "NASI LIWET",
      foto: "/menu9.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem et diam rhoncus mattis.",
    },
  ];

  // Display only the first 6 items initially, or all if showAllItems is true
  const displayedItems = showAllItems ? menuItems : menuItems.slice(0, 6);

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

      {/* Grid layout that allows items to expand */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, index) => (
          <div key={index} className="flex justify-center col-span-1">
            <CardMenu nama={item.nama} foto={item.foto} desc={item.desc} />
          </div>
        ))}
      </div>

      {/* Show more/less button */}
      {menuItems.length > 6 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAllItems(!showAllItems)}
            className="px-8 py-3 bg-black text-white font-medium rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300"
          >
            {showAllItems ? "Show Less" : "Show More Menu"}
          </button>
        </div>
      )}
    </>
  );
}

export default MenuSection;
