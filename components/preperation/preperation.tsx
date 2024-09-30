import React, { ReactNode } from "react";
import PrepCard from "./prepCard";
// Préparation aux travaux dirigés
// Stages de pré-rentrée
// Stages de révision
// Suivi pédagogique


interface PrepCardData {
  title: ReactNode;
  subtitle ?: ReactNode;
  subtitleList: string[];
  image: string;
  link?: string;
  index: number;
}

interface PreperationProps{
  prepCardData: PrepCardData[];
  title? : ReactNode;
  long?: boolean;
}
export default function Preperation({prepCardData,title="Choisissez votre préparation",long=false}:PreperationProps ) {
  return (
    <div className="bg-white h-full flex items-center justify-center xl:px-24 px-8 flex-col relative">
      <span className="text-[#0393D6] text-[48px] font-bold text-center w-full">
        {title}
      </span>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between mt-10 w-full gap-5">
        {prepCardData.map((item, index) => (
          <PrepCard
            key={index}
            title={item.title}
            subtitleList={item.subtitleList}
            image={item.image}
            link={item.link}
            long = {long}
            subtitle ={item.subtitle}
            index={item.index}
          />
        ))}
      </div>
    </div>
  );
}
