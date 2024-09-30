import React, { ReactNode } from "react";
import HeroCard from "./heroCard";
import AppointmentButton from "../button";
import { FaTriangleExclamation } from "react-icons/fa6";

interface HeroCardProps {
  title: ReactNode;
  image: string;
}

interface HeroProps {
  heroCardData: HeroCardProps[];
  heroImg: string;
  heroTitle: ReactNode;
  heroSubTitle: ReactNode;
}

export default function Hero({
  heroCardData,
  heroImg,
  heroTitle,
  heroSubTitle,
}: HeroProps) {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="bg-cover bg-center h-full flex items-start justify-start px-8 pt-10 pb-28 flex-col relative"
    >
      <div className=" flex flex-col gap-y-4 text-white text-left ">
        <span className="font-bold text-2xl lg:text-[52px] lg:leading-[65px]">{heroTitle}</span>

        <span className="text-lg lg:text-[24px] font-bold mt-5 lg:leading-[32px]">
          {heroSubTitle}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:flex gap-y-5 gap-x-5 mt-10">
        {heroCardData.map((item, index) => (
          <HeroCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <div className="mt-10 ">
        <AppointmentButton inverted={false} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#0393D6] py-2 px-4 lg:px-0 flex items-center justify-center font-bold lg:text-[18px] xl:text-[24px]">
        <FaTriangleExclamation className="mr-2 text-[#ffd31e] " /> 197 / 250
        places réservées pour la rentrée 2024/2025 - Ne tardez pas à vous
        inscrire <FaTriangleExclamation className="ml-2 text-[#ffd31e]" />
      </div>
    </div>
  );
}
