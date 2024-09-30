import React from "react";
import AppointmentButton from "@/components/button";
import TarifSub from "../subcomponents/TarifSub";
import Stages from "../subcomponents/Stages";
import Financer from "../subcomponents/Financer";
export default function Tarifs() {


  return (
    <div className="flex flex-col items-center mt-20">
      <p className="font-family[Arial] text-[48px] font-bold leading-[60px] text-center text-alva-light-blue mb-8">
        Tarifs
      </p>
      <div className="md:p-10">
        <TarifSub />
      </div>
      <Stages />
      <Financer />
    </div>
  );
}
