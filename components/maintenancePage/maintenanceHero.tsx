import React from "react";
import AppointmentButton from "../button";
import HeroCard from "../hero/heroCard";
import { FaTriangleExclamation } from "react-icons/fa6";
import Hero from "../hero/hero";

const heroCardData = [
  {
    title: <span>Cours <br/> L1-L2-L3-M1</span>,
    image: "herocard1.png",
  },
  {
    title: <span>En présentiel ou <br/> à distance</span>,
    image: "herocard2.png",
  },
  {
    title: <span>Présence dans <br/> toute la France</span>,
    image: "herocard3.png",
  },
  {
    title: <span>Organisme de <br/> formation <br/> reconnu par l’Etat</span>,
    image: "herocard4.png",
  },
  {
    title: <span>Dispositifs de <br/> financements</span>,
    image: "herocard5.png",
  },
];

export default function MaintenanceHero() {
  return (
    <Hero
      heroCardData={heroCardData}
      heroImg="hero.png"
      heroTitle={
        <span>
          N°1 sur le cours de soutien <br /> en droit depuis 2019
        </span>
      }
      heroSubTitle={
        <span>
          Organisme de soutien universitaire spécialisé <br className="hidden lg:block" /> pour les
          étudiants de licence et master en droit 👩‍🎓🧑‍🎓
        </span>
      }
    />
  );
}
