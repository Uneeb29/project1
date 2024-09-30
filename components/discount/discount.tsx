import React from "react";
import Image from "next/image";

export default function Discount() {
  return (
    <div className="bg-white h-full flex items-center justify-center py-12 xl:px-24 px-8 w-full  flex-col relative">
      <div className="flex sm:flex-row flex-col gap-5   bg-white rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-4 w-full">
        <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
          <Image
            src="/domicile2.png"
            alt="Course discount illustration"
            className="grow w-full aspect-[1.54] max-md:mt-10"
            width={350}
            height={350}
            loading='eager' 
            />
        </div>{" "}
        <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-center text-sky-600 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-[26px] xl:text-[32px] font-bold max-md:max-w-full">
              Ne payez que 50% du prix des cours avec nous
            </h2>
            <p className="self-center mt-10 text-[15px] xl:text-[20px] leading-8 max-md:max-w-full">
              Vos cours particuliers à domicile partir de ~ 29 € / heure en
              moyenne <br></br>
              grâce à l’avance immédiate du crédit d’impôts service à la
              personne{" "}
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
