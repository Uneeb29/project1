import React from "react";
import AppointmentButton from "../button";
import Image from "next/image";
const teachingList = [
  "Identifie les professeurs adaptés aux besoins de <br/> votre fils/fille",
  "S’assure de sa progression mois par mois avec des <br/>  bilans réguliers",
  "Disponible de manière illimitée par téléphone, visio,<br/>  mail tous les jours de la semaine",
  "S’occupe de toutes les démarches administratives au <br/>  cours de l’accompagnement (URSAFF, paiements <br/>  échelonnés, attestations fiscales etc)",
];
interface TeachingProps {
    button ?: boolean
}
export default function Teaching({button = false}:TeachingProps) {
  return (
    <div className="bg-white h-full flex items-center justify-center xl:px-24 px-8 flex-col relative">
      <span className="text-[#0393D6] text-[48px] font-bold text-center w-full">
        Une équipe pédagogique dédiée{" "}
      </span>
      <span className="text-[#0393D6] text-[20px] mt-10 text-center w-full">
        Votre conseiller pédagogique, un interlocuteur à votre écoute tout au
        long de votre accompagnement
      </span>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:items-start mt-10 w-full gap-5">
        <div className="lg:w-1/3 lg:mr-10">
          <Image src="/teaching.png" loading='eager'  className="w-full" alt="Teaching" width={400} height={400}/>
        </div>
        <div className="mt-14">
          {teachingList.map((item, index) => (
            <div key={index} className="flex gap-5 mt-8 xl:mt-16 items-center">
              <Image src="/tickmarker.svg" loading='eager'  className="w-10 h-10" alt="Check" width={20} height={20}/>
              <span
                className="text-[#0393D6] text-[18px] xl:text-[24px] "
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
            {button && (
                <div className="mt-10 w-full justify-center items-center flex">
                <AppointmentButton inverted={false} text="Prendre RDV" link="https://meetings.hubspot.com/jsigal/rendez-vous-information?uuid=5c1e608e-8951-477e-9c24-bf1686f931cd" />
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
