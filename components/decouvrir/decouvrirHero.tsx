import Layout from "@/components/baselayout/layout";
import AppointmentButton from "@/components/button";

export default function decouvrirHero() {
  return (
    <div className="flex flex-row w-full bg-alva-light-blue h-[500px]  ">
      <div className="ml-20 md:flex hidden flex-col items-start justify-center md:w-1/2 h-full">
        <h1 className="font-bold text-white text-2xl md:text-4xl xl:text-5xl leading-tight mb-12">
          1 professeur personnel
          <br /> pour chacune de vos matières
        </h1>
        <AppointmentButton inverted={true} />
      </div>
      <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover w-full  md:w-1/2 ">
        <div className=" md:hidden flex flex-col mt-40 md:mt-0 text-center items-center justify-center w-full">
          <h1 className="font-bold text-white text-2xl md:text-4xl xl:text-5xl leading-tight mb-12">
            1 professeur personnel
            <br /> pour chacune de vos matières
          </h1>
          <AppointmentButton inverted={true} selfStart={false} />
        </div>
      </div>
    </div>
  );
}
