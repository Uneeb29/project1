import React from "react";
import Image from "next/image";

export default function TestimonialCard({
  imgUrl,
  commenter,
  comment,
  imageDescription,
}: {
  imgUrl: string;
  commenter: string;
  comment: string;
  imageDescription: string;
}) {
  return (
    <div className="flex flex-col text-[#0393D6] items-center rounded-lg w-full lg:w-[444px] lg:h-[260px] card-shadow  gap-y-4 py-4 px-4 lg:px-8 bg-white ">
      <div className="flex items-center gap-x-6 w-full">
        <Image src = {imgUrl} width={100} height={100} alt={imageDescription} loading='eager' className="rounded-full" />

        <div className="">
          <p className="font-bold pb-2">{commenter}</p>
          <Image src="star.svg" alt="star" loading='eager' width={100} height={100} />
        </div>
      </div>
      <div >
        <p className="text-xs text-justify leading-5">{comment}</p>
      </div>
    </div>
  );
}
