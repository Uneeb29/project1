import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white px-5 py-3 text-[12px] xl:text-[18px] flex justify-between items-center w-full max-w-[1800px] fixed top-0  z-50">
      <Link href={"/"}>
        <Image
          src="/missionmasters.png"
          width={230}
          height={192}
          alt="Mission Partiels logo"
          loading="eager"
        />
      </Link>
      <div className=" hidden lg:flex text-[#0393D6] font-bold gap-5  justify-center">
        <Link href={"/coursdesoutien"}>
          <span>Cours de soutien</span>
        </Link>
        <Link href={"/maintenance"}>
          <span>Sélection en Master</span>
        </Link>
        <Link href={"/resultats"}>
          <span>Nos résultats</span>
        </Link>
        <Link href={"/blog"}>
          <span>Ressources</span>
        </Link>
      </div>
      <div className="hidden lg:flex gap-3 md:gap-5 ml-4 mt-3 md:mt-0">
        <a href="tel:33613963922">
          <button className="bg-[#0393D6] rounded-full font-bold items-center flex text-[12px] xl:text-[16px] shadow-xl p-2 md:p-0">
            <Image
              src="/phone.svg"
              width={35}
              height={20}
              alt="phone"
              loading="eager"
            />
            <span className="pr-2 xl:pr-5 xl:pl-2">+33(0)613963922</span>
          </button>
        </a>
        <Link
          href={
            "https://meetings.hubspot.com/jsigal/rendez-vous-information?uuid=5c1e608e-8951-477e-9c24-bf1686f931cd"
          }
          target="_blank"
          className="bg-[#0393D6] font-bold items-center justify-center rounded-full text-[14px]  xl:text-[18px] flex px-4 xl:px-14 shadow-xl"
        >
          Prendre RDV
        </Link>
      </div>
      <div className="flex w-full justify-end lg:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <RxCross1 className=" text-black text-2xl " />
          ) : (
            <AiOutlineMenu className="text-[#0393D6] text-2xl " />
          )}
        </button>
      </div>
      {menuOpen && (
        <div>
          <div className=" bg-white text-[#0393D6] w-screen top-12 pb-6 left-0 absolute z-50 flex lg:hidden ">
            <nav className="lg:hidden font-semibold flex flex-col items-center w-screen gap-y-3 py-4 ">
              <Link href={"/coursdesoutien"}>
                <span>Cours de soutien</span>
              </Link>
              <Link href={"/maintenance"}>
                <span>Sélection en Master</span>
              </Link>
              <Link href={"/resultats"}>
                <span>Nos résultats</span>
              </Link>
              <Link href={"/blog"}>
                <span>Ressources</span>
              </Link>
              <a href="tel:33613963922">
                <button className="bg-[#2e82a9] text-white rounded-full font-bold items-center flex text-[12px] p-1 shadow-xl ">
                  <Image src="/phone.svg" width={18} height={20} alt="phone" loading='eager'/>
                  <span className="pr-2">+33(0)613963922</span>
                </button>
              </a>
              <Link
                href={
                  "https://meetings.hubspot.com/jsigal/rendez-vous-information?uuid=5c1e608e-8951-477e-9c24-bf1686f931cd"
                }
                target="_blank"
                className="bg-[#0393D6] text-white font-bold items-center justify-center rounded-full text-[14px]  xl:text-[18px] flex px-4 xl:px-14 shadow-xl"
              >
                Prendre RDV
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
