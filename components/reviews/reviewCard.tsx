import React from 'react';
import Image from 'next/image';

interface ReviewCardProps {
  imageSrc: string;
  name: string;
  title: string;
  ratingImageSrc: string;
  testimonial: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  imageSrc,
  name,
  title,
  ratingImageSrc,
  testimonial
}) => {
  return (
    <article className="flex flex-col px-3 py-3.5 text-[#0393D6] bg-white rounded-lg max-w-[404px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
      <header className="flex gap-5 text-[12px] xl:text-base font-bold">
        <Image loading='eager'  src={imageSrc} alt={`Portrait of ${name}`} className="shrink-0 aspect-[0.97]" width={88} height={88}/>
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
          <h2>{name} - {title}</h2>
          <Image loading='eager'  src={ratingImageSrc} alt="Rating" className="mt-2.5 aspect-[4.76] " width={99} height={99}/>
        </div>
      </header>
      <p className="mt-2.5 text-[12px] lg:text-[8px] xl:text-xs leading-5">
        {testimonial}
      </p>
    </article>
  );
}

export default ReviewCard;