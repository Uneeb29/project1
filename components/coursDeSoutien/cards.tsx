import { homeCardsData } from "@/data/home-cards-data";
import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
  {
    homeCardsData.map((card, index) => (
      <div key={index} className="bg-white flex flex-col items-center rounded-[10px] w-[325px] h-[260px] card-shadow  gap-y-4 py-4 px-8 ">
        <Image src={card.imgSrc} loading='eager' width={100} height={100} alt={card.alt} />
        <span className="font-bold text-lg leading-6 tracking-[0.4px] text-[#0393D6] text-center h-[72px]">
          {card.text}
        </span>
      </div>
    ))
  }
  </div>
  );
}
