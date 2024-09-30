import React from "react";
import Hero from "../hero/hero";

const heroCardData = [
  {
    title: (
      <span>
        Cours <br /> L1-L2-L3-M1
      </span>
    ),
    image: "herocard1.png",
  },
  {
    title: (
      <span>
        En présentiel ou <br /> à distance
      </span>
    ),
    image: "herocard2.png",
  },
  {
    title: (
      <span>
        Présence dans <br /> toute la France
      </span>
    ),
    image: "herocard3.png",
  },
  {
    title: (
      <span>
        Organisme de <br /> formation <br /> reconnu par l’Etat
      </span>
    ),
    image: "herocard4.png",
  },
];
export default function CoursHero() {
  return (
    <div>
      <Hero
        heroCardData={heroCardData}
        heroTitle={
          <span>
            Faites confiance à une
            <br />
            prépa qui vous écoute
          </span>
        }
        heroSubTitle={
          <span>
            Retrouvez les témoignages des étudiants qui ont bénéficié de <br />
            cours de soutien chez Mission Masters
          </span>
        }
        heroImg="/cours-hero.svg"
      />
    </div>
  );
}
