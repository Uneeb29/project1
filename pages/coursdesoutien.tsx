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
];
const prepCardData = [
  {
    title: <span>Stage de pré-rentrée <br/> L1-L2-L3</span>,
    subtitle: <span>2 semaines de découverte</span>,
    subtitleList: [
      "Apprendre à s’organiser lorsqu’on entre à l’Université",
      "Se familiariser avec la méthodologie des exercices juridiques",
      "Découverte des 1ères notions de l’année",
      "Correction des 1ers TDs pour prendre de l’avance",
    ],
    image: "/prepCard4.png",
    link:"/programme",
    index:3
  },
  {
    title: <span>Préparation des<br/>travaux dirigés</span>,
    subtitle: <span>14h de soutien / matière</span>,
    subtitleList: [
      "1 séance hebdomadaire avant la tenue de chaque TD",

      "Approfondissement des notions",

      "Analyse des documents",

      "Correction de l’exercice pratique",
    ],
    image: "/prepCard5.png",
    link:"/programme",
    index:1

  },
  {
    title: <span>Stage de révision <br/> hivernal / estival</span>,
    subtitle: <span>10h de révision / matière</span>,
    subtitleList: [
      "Révision de la méthodologie (commentaire d’arrêt, cas pratique, dissertation)",

      "Révision des principales notions de cours",

      "Analyse des documents",

      "Passage de deux examens blancs. Correction en séance individuelle.",
    ],
    image: "/prepCard6.png",
    link:"/programme",
    index:2

  },
];

export default function Home() {
  return (
    <Layout title="Cours de soutien">
      <Hero
        heroCardData={heroCardData}
        heroImg="coursHero.png"
        heroTitle={<span>Valide ta licence de droit <br />
          avec un soutien personnalisé</span>}
        heroSubTitle={
          <span>
            Cours de soutien en séances individuelles avec des professeurs <br /> de droit expérimentés et sélectionnés dans toute la France
          </span>
        }
      />
      <Preperation
        prepCardData={prepCardData}
        title="La préparation qui vous correspond"
        long={true}
      />
      <Discount />
      <Teaching button={true} />
      <Families />
      <Reviews />
      <Comment />
      <Appointment />
      <Blog />
    </Layout>
  );
}
