import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { horizontalCards } from "@/data/parcours";

export default function Parcours() {
  const router = useRouter();

  useEffect(() => {
    // Get the card index from the query parameters
    const { index } = router.query;

    if (index) {
      // Scroll to the element with the id of the given index
      console.log(index)
      const element = document.getElementById(`card-${index}`);
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.query]);

  return (
    <div>
      <p className="md:ml-6 mt-20 font-family[Arial] text-[40px] font-bold leading-[60px] text-center lg:text-left text-alva-light-blue">
        Nos parcours
      </p>
      <div className="flex flex-col gap-16 mt-8">
        {horizontalCards.map((card, index) => (
          <div
            key={index}
            id={`card-${index+1}`}  
            className="flex lg:flex-row flex-col items-center justify-between gap-16 bg-white rounded-lg shadow-lg p-6"
          >
            <div className="py-2 flex flex-col lg:1/2">
              <p className="font-family[Arial] text-[24px] xl:text-[32px] font-bold leading-[60px] text-left text-alva-light-blue ">
                {card.title}
              </p>
              <p className="font-semibold text-alva-light-blue text-left leading-relaxed xl:whitespace-pre-line text-[14px] xl:text-[20px] mb-14">
                {card.subtitle}
              </p>
              <p className="text-alva-light-blue text-left leading-10 xl:whitespace-pre-line text-[14px] xl:text-[20px]">
                {card.description}
              </p>
            </div>
            <img
              src={card.image}
              className="lg:w-1/3 w-[350px] rounded-lg"
              alt={card.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
