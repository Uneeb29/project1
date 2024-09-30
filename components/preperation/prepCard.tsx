import Link from "next/link";
import React, { ReactNode } from "react";
import Image from "next/image";
interface PrepCardProps {
  title: ReactNode;
  subtitle?: ReactNode;
  subtitleList: string[];
  image: string;
  long: boolean;
  link?: string;
  index: number;
}

const PrepCard: React.FC<PrepCardProps> = ({
  title,
  subtitleList,
  image,
  subtitle,
  long,
  link,
  index
}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[358px]">
      <div
        className={`flex flex-col items-center  text-[#0393D6] p-4 bg-white rounded-lg shadow-[0px_2px_8px_rgba(99,99,99,0.2)] w-full ${
          long ? "h-[950px]" : "h-[650px]"
        }`}
      >
        <div className="flex flex-col items-center text-center lg:text-left w-full">
          <Image
            src={image}
            alt="PrepCard"
            width={320}
            height={320}
            loading="eager"
          />
          <span className="text-[26px] xl:text-[32px] font-bold  w-full mt-4">
            {title}
          </span>

          {subtitle && (
            <span className="text-[15px] xl:text-[24px] mt-4 font-bold">
              {subtitle}
            </span>
          )}
        </div>
        <div className="leading-10 text-[15px] xl:text-[20px] mt-8">
          {subtitleList.map((subtitle, index) => (
            <li key={index} className={`${long ? "mt-6" : ""}`}>
              {subtitle}
            </li>
          ))}
        </div>
        <button className="px-14 py-1 font-bold text-[15px] xl:text-[20px] mt-auto text-white  bg-[#0393D6] rounded-[32px] shadow-[0px_5px_6px_rgba(0,50,80,0.1)]">
          <a href={`${link}?index=${index}`} className="">
            Découvrir
          </a>
        </button>
      </div>
    </div>
  );
};

export default PrepCard;
