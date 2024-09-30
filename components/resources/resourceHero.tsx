import React from "react";
import AppointmentButton from "../button";
import HeroCard from "../hero/heroCard";
import { FaTriangleExclamation } from "react-icons/fa6";
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

export default function ResourceHero() {
  return (
    <Hero
      heroTitle={
        <span>
          Retrouvez l’actualité des <br /> études de droit
        </span>
      }
      heroCardData={heroCardData}
      heroImg="/resource-hero.svg"
      heroSubTitle={
        <span>
          Articles, guides, conférences, tenez vous au courant des évolutions
          des
          <br /> études de droit en France
        </span>
      }
    />
  );
}
