import Layout from "@/components/baselayout/layout";
import Discount from "@/components/discount/discount";
import Families from "@/components/families/families";
import Hero from "@/components/hero/hero";
import Preperation from "@/components/preperation/preperation";
import Reviews from "@/components/reviews/reviews";
import Teaching from "@/components/teaching/teaching";
import Comment from "@/components/comment/comment";
import { Poppins } from "next/font/google";
import Blog from "@/components/blog/blog";
import Appointment from "@/components/coursDeSoutien/appointment";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--poppins-default",
});

const heroCardData = [
  {
    title: <span>Cours <br /> L1-L2-L3-M1</span>,
    image: "herocard1.png",
  },
  {
    title: <span>En présentiel ou <br /> à distance</span>,
    image: "herocard2.png",
  },
  {
    title: <span>Présence dans <br /> toute la France</span>,
    image: "herocard3.png",
  },
  {
    title: <span>Organisme de <br /> formation <br /> reconnu par l’Etat</span>,
    image: "herocard4.png",
  },
  {
    title: <span>Dispositifs de <br /> financements</span>,
    image: "herocard5.png",
  },
];
const prepCardData = [
  {
    title: <span>Soutien droit <br /> L1-L2-L3-M1</span>,
    subtitleList: [
      "Préparation aux travaux dirigés",
      "Stages de pré-rentrée",
      "Stages de révision",
      "Suivi pédagogique",
    ],
    image: "/prepCard1.png",
    link: "/programme",
    index:3
  },
  {
    title: <span>Soutien droit <br /> Spécial Assas</span>,

    subtitleList: [
      "Professeurs diplômés d’Assas",
      "Préparation aux travaux dirigés",
      "Stages de pré-rentrée",
      "Stages de révision",
      "Suivi pédagogique",
    ],
    image: "/prepCard2.png",
    link: "/programme",
    index:1
  },
  {
    title: <span>Préparation à la <br /> sélection en Master</span>,

    subtitleList: [
      "Conseiller d’orientation dédié",
      "Choix des Masters",
      "Rédaction des dossiers",
      "Aide plateforme MonMaster",
    ],
    image: "/prepCard3.png",
    link: "/programme",
    index :2
  },
];

export default function Home() {
  return (
    <Layout title="Mission Masters">
      <Hero
        heroCardData={heroCardData}
        heroImg="hero.png"
        heroTitle={<span>
          N°1 sur le cours de soutien <br /> en droit depuis 2019
        </span>}
        heroSubTitle={<span>
          Organisme de soutien universitaire spécialisé <br />
          pour les étudiants de licence et master en droit 👩‍🎓🧑‍🎓
        </span>}
      />
      <Preperation prepCardData={prepCardData} title="Choisissez votre préparation" />
      <Discount />
      <Teaching />
      <Families />
      <Reviews />
      <Comment />
      <Appointment />
      <Blog />
    </Layout>
  );
}
