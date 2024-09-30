import React, { ReactNode } from "react";
import Image from "next/image";

interface HeroCardProps {
  title: ReactNode;
  image: string;
}

export default function HeroCard({ title, image }: HeroCardProps) {
  return (
    <div className="bg-white rounded-[8px] px-2 lg:px-4 py-4 flex flex-col items-center justify-center text-center lg:w-[180px]">
      <Image src={"/"+image} alt="Hero" loading='eager'  width={80} height={80} />
      <span
        className=" lg:text-[18px] text-[#0393D6] mt-2">
        {title}
      </span>
    </div>
  );
}
