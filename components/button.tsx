import Link from "next/link";
import React from "react";
interface AppointmentButtonProps {
  inverted?: boolean;
  text?: string | null;
  link?: string;
  selfStart?:boolean | null;
}
const AppointmentButton: React.FC<AppointmentButtonProps> = ({
  inverted,
  text="Prendre RDV",
  link="https://meetings.hubspot.com/jsigal/rendez-vous-information?uuid=5c1e608e-8951-477e-9c24-bf1686f931cd",
  selfStart=true
}) => {
  return (
    <Link
      className={`${selfStart?"self-start":""} px-16 py-5 text-xl font-bold text-center rounded-[32px] shadow-[0px_5px_6px_rgba(0,50,80,0.1)] max-md:pr-6 max-md:pl-6 max-md:mt-10 ${inverted ? "text-[#0393D6] bg-white " : "text-white bg-[#0393D6]"
        } `}
      href={link} target="_blank"
    >
      {text}
    </Link>
  );
};

export default AppointmentButton;
