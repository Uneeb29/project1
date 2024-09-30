import React from "react";
import FamiliesCard from "./familiesCard";

const familyCardProps = [
  {
    cardImg: "1.svg",
    cardContent:
      "de parents et d’étudiants satisfaits chaque année depuis 2019",
  },
  {
    cardImg: "2.svg",
    cardContent:
      "familles accompagnées depuis l’ouverture de l’organisme en 2019",
  },
  {
    cardImg: "3.png",
    cardContent:
      "la note moyenne que nos étudiants et leurs parents ont attribué à l’expérience Mission Masters",
  },
];

export default function Families() {
  return (
    <div className="bg-white h-full flex items-center justify-center xl:px-24 px-8 flex-col relative">
      <span className="text-[#0393D6] text-[48px] font-bold text-center w-full">
        Nos familles en parlent le mieux
      </span>
      <div className="flex-col lg:flex-row lg:gap-y-0 gap-y-8 flex mx-[10%] gap-x-6 mt-20 mb-10">
        {familyCardProps.map((item, index) => (
          <FamiliesCard
            key={index}
            cardImg={item.cardImg}
            cardTitle={null}
            cardContent={item.cardContent}
          />
        ))}
      </div>
    </div>
  );
}
