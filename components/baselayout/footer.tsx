import React from 'react';
import AppointmentButton from '../button';
import Image from 'next/image';

const Footer: React.FC = () => {
  const navItems = [
    "Accueil",
    "Cours de soutien",
    "Cours de soutien Assas",
    "Admission Master",
    "Nos résultats",
    "Ressources"
  ];

  const footerLinks = [
    "Politiques de confidentialité",
    "Mentions légales",
    "CGV. CGA"
  ];

  return (
    <footer className="flex flex-col w-full px-14 py-9 bg-[#0393D6] mt-44">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[29%] max-md:w-full">
          <div className="flex flex-col grow text-[14px] xl:text-[16px] tracking-tight leading-7 text-white max-md:mt-10">

            <Image
              src="/missionmasters2.png"
              alt="Mission Partiels logo"
              width={256}
              height={256}
              className="mb-10"
              loading='eager'

              />
            <span className="-mt-3 mb-32">
              @ : team@missionpartiels.fr <br />
              Tél : +33(0)613963922 <br />
              Siège : 4 rue des indes noires, 80440 Boves
            </span>
            <AppointmentButton inverted={true} />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full  justify-start items-start">
          <div className="flex flex-col font-bold text-white ">
            <h1 className="xl:text-[36px] text-[26px] ">
              N°1 sur le cours de soutien en droit depuis 2019
            </h1>
            <nav className="flex gap-5 mt-7 text-[10px] xl:text-[14px] max-md:flex-wrap max-md:pr-5">
              {navItems.map((item, index) => (
                <a key={index} href="#" className="tracking-wide underline">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex gap-5 self-end mt-10 text-sm font-bold tracking-wide text-white max-md:flex-wrap max-md:mt-10">
        {footerLinks.map((link, index) => (
          <a key={index} href="#" className="flex-auto">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
