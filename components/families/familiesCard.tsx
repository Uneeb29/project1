import React from "react";
import Image from "next/image";

interface FamiliesCardProps {
  cardImg: string;
  cardTitle: string | null;
  cardContent: string;
}

export default function FamiliesCard({
  cardImg,
  cardTitle,
  cardContent,
}: FamiliesCardProps) {
  return (
    <div className="flex flex-col items-center text-center  shadow-[0px_4px_10px_0px_#0000001A] rounded-[10px] w-[240px] xl:w-[280px] h-[260px] pb-7 pt-4">
      <Image src={"/"+cardImg} alt="card" width={80} height={80} loading='eager'  />

      <p className="text-[16px]xl:text-[20px] text-[#0393D6] font-bold leading-tight tracking-wide px-6 mt-3 text-center">
        {cardContent}
      </p>
      <span className="text-[12px] xl:text-[16px] text-[#0393D6]  leading-snug tracking-wide mx-[10%]">
        {cardTitle}
      </span>
    </div>
  );
}
