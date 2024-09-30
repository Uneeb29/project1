import React from "react";
import AppointmentButton from "../button";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white h-full flex lg:items-end items-center lg:justify-end justify-center xl:px-24 px-8 flex-col relative">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <span className="text-[#0393D6] text-[48px] font-bold">
          Réservez un bilan pédagogique gratuit{" "}
        </span>
        <span className="text-[#0393D6] text-[20px] mt-10">
          Nous faisons le point sur les besoins de votre fils ou de votre fille
          et y apportons une solution dans les 48h
        </span>
      </div>

      <Image src="/womanContact.jpg" width={450} height={600} alt="womanContact" loading='eager' className="lg:absolute z-10 md:w-[45%] lg:h-[60%] lg:mt-0 mt-20 object-cover left-[100px] top-[200px] rounded-xl " />

      <section className="flex flex-col items-start mt-5 lg:mt-20 py-6 px-10 font-bold text-[#0393D6] bg-white rounded-xl  shadow-[0px_0px_40px_rgba(0,0,0,0.05)] w-full lg:w-[55%] z-40">
        <Image src="/phone2.svg" width={72} height={72} alt="phone" loading='eager' className="aspect-[1.22] w-[72px]" />
        <h2 className="mt-4 text-[26px]  xl:text-[32px] ">Réservez un appel</h2>
        <p className="mt-4 text-[12px] xl:text-[18px] font-normal">
          Un de nos conseillers pédagogiques vous rappellera dans les 24 heures
          afin de faire le point sur votre demande de cours de soutien
        </p>
        <div className="flex items-start mt-4  w-full justify-start flex-col">
          <span className="text-[#0393D6] text-[16px] font-bold xl:mt-8">
            Nom, Prénom
          </span>
          <input
            type="text"
            className="mt-4 w-full p-2 rounded-lg border border-[#0393D6] focus:outline-none"
          />
          <span className="text-[#0393D6] text-[16px] font-bold mt-4 xl:mt-8">
            Addresse email
          </span>
          <input
            type="text"
            className="mt-4 w-full p-2 rounded-lg border border-[#0393D6] focus:outline-none"
          />
          <span className="text-[#0393D6] text-[16px] font-bold mt-4 xl:mt-8">
            N° de téléphone
          </span>
          <input
            type="text"
            className="mt-4 w-full p-2 rounded-lg border border-[#0393D6] focus:outline-none"
          />
        </div>

        <div className="flex items-center mt-8  w-full justify-center">
          <AppointmentButton inverted={true} text={"Prendre rendez-vous"} />
        </div>
      </section>
    </div>
  );
}
