import Image from "next/image";
export default function Stages() {
  return (
    <div className="flex md:flex-row flex-col md:justify-around w-full md:align-center items-center my-10 h-[350px]">
      <div className="flex flex-col items-center md:items-start  mt-10 md:text-left text-center">
        <p className="font-arial font-bold text-[40px] xl:text-[52px] text-alva-light-blue">
          Stages de pré-rentrée
        </p>
        <button className="bg-alva-light-blue rounded-full px-16 py-2 font-arial text-[30px] xl:text-[48px] mt-10">
          Nous contacter
        </button>
      </div>

      <Image
        src="/benefits.jpg"
        alt="benefits"
        className="md:mt-0 mt-8"
        width={350}
        height={350}
        loading='eager' 
      />
    </div>
  );
}
