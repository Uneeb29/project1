import React from "react";
import ReviewCard from "./reviewCard";
import Image from "next/image";

const reviews = [
  {
    imageSrc: "/woman1.png",
    name: "Inès",
    title: "étudiante en L2 Droit",
    ratingImageSrc: "/stars.png",
    testimonial:
      "Super expérience avec Mission Masters ! L’accompagnement est personnalisé et adapté pour chaque étudiant ce qui permet de pallier les difficultés au plus vite. J’ai bénéficié d’un accompagnement sur mes deux semestres de L1 ce qui m’a permis d’atteindre une moyenne de 14,2/20 au deuxième semestre.",
  },
  {
    imageSrc: "/woman2.png",
    name: "Maxime",
    title: "étudiant en L1 Droit",
    ratingImageSrc: "/stars.png",
    testimonial:
      "Je ne saurais trop recommander Mission Masters pour leur accompagnement personnel exceptionnel cette année. Les personnes sont bienveillantes et toujours à l'écoute, offrant des conseils avisés et des solutions pratiques à chaque étape. Un grand merci à Mission Masters.",
  },
];
const reviews2 = [
  {
    imageSrc: "/woman3.png",
    name: "Emma",
    title: "étudiante en L1 Droit",
    ratingImageSrc: "/stars.png",
    testimonial:
      "J'ai pu expérimenter cette année l'accompagnement en droit. Les tuteurs sont à l'écoute, disponibles et très compétents ! L'équipe de mission masters est aussi très à l'écoute et réactive en cas de besoin. J'ai passé une très bonne année aux cotés de Mission Masters !",
  },
  {
    imageSrc: "/woman4.png",
    name: "Nasha",
    title: "étudiante en L2 Droit",
    ratingImageSrc: "/stars.png",
    testimonial:
      "Très fiable et très investie. Mission master m'a beaucoup aidé à travailler et surtout accompagnée dans mon année de L2 Droit. Les professeurs trouvés sont compétents et respectent les critères demandés à Mission Master. Ils maintiennent le contact et s'assurent de notre bonne prise en charge et évolution.",
  },
];

export default function Reviews() {
  return (
    <div className="bg-white h-full flex lg:flex-row flex-col items-center lg:items-end justify-center xl:px-24 px-2 relative">
      <div className="flex flex-col">
        <Image src="/google.png" loading='eager'  className="" alt="Reviews" width={400} height={400}/>
        <div className="flex flex-col gap-10">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imageSrc={review.imageSrc}
              name={review.name}
              title={review.title}
              ratingImageSrc={review.ratingImageSrc}
              testimonial={review.testimonial}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/bigWoman.png" loading='eager'  className="" alt="Reviews" width={600} height={600}/>
      </div>
      <div className="flex flex-col">
        <Image src="/trust.png" loading='eager'  className="" alt="Reviews" width={400} height={400}/>
        <div className="flex flex-col gap-10">
          {reviews2.map((review, index) => (
            <ReviewCard
              key={index}
              imageSrc={review.imageSrc}
              name={review.name}
              title={review.title}
              ratingImageSrc={review.ratingImageSrc}
              testimonial={review.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
