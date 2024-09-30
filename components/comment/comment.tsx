import React from "react";
import FamiliesCard from "../families/familiesCard";

const commentCardProps = [
  {
    cardImg: "comment1.png",
    cardContent: "Je prends RDV",
    cardTitle:
      "Rencontrez un conseiller pédagogique afin de cerner les difficultés de votre fis ou de votre fille",
  },
  {
    cardImg: "comment2.png",
    cardContent: "Je m’inscris",
    cardTitle:
      "Recevez une proposition d’accompagnement adaptée, sur le semestre ou l’ensemble de l’année universitaire",
  },
  {
    cardImg: "comment3.png",
    cardContent: "Je fais mon 1er cours",
    cardTitle:
      "Débutez votre 1er cours avec des professeurs sélectionnés selon le profil de l’étudiant et ses besoins",
  },
  {
    cardImg: "comment4.png",
    cardContent: "Je valide mes partiels",
    cardTitle:
      "Réussissez votre année, 93% de nos étudiants valident leurs partiels grâce à notre accompagnement",
  },
];

export default function Comment() {
  return (
    <div className="bg-white h-full flex items-center justify-center xl:px-24 px-8 flex-col mt-10">
      <span className="text-[#0393D6] text-[48px] font-bold text-center w-full">
      Comment s’inscrire ?
      </span>
      <div className="flex-col lg:flex-row lg:gap-y-0 gap-y-8 flex mx-[10%] gap-x-6 mt-20 mb-10">
        {commentCardProps.map((item, index) => (
          <FamiliesCard
            key={index}
            cardImg={item.cardImg}
            cardTitle={item.cardTitle}
            cardContent={item.cardContent}
          />
        ))}
      </div>
    </div>
  );
}
