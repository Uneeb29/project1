import React from "react";
import AppointmentForm from "./subComponents/appointmentForm";
import AppointmentButton from "../button";
import { useState } from "react";
import Image from "next/image";

export default function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!name || !email || !phone) {
      setError("Please fill in all fields");
      return;
      }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (response.ok) {
        setSuccess("Your information has been submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        alert("Contact details saved successfully!");
      } else {
        const data = await response.json();
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred while sending the request");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-y-10 text-[#0393D6] ">
      <div className="flex flex-col text-center items-center gap-y-6">
        <p className=" text-3xl lg:text-[40px] font-bold leading-10 lg:leading-[44px] tracking-[0.99px]">
          Réservez un bilan pédagogique gratuit
        </p>
        <p className="text-lg lg:text-xl tracking-[0.2px] leading-7 lg:leading-8">
          Nous faisons le point sur les besoins de votre fils ou de votre fille
          et y apportons une solution dans les 48h
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center  ">
        <Image src="/appointment.svg" alt="appointment" width={702} height={647}  />
        <div className="flex flex-col w-full lg:w-[702px] lg:h-[647px] rounded-[10px] bg-white appoint-shadow p-4 lg:p-10 z-10 lg:-ml-20 mt-10 gap-y-5">
          <div>
            {" "}
            <Image src="/call.svg" alt="call-icon" loading='eager' width={48} height={32} />
          </div>
          <div className="flex flex-col gap-y-8">
            <p className="leading-5 text-xl lg:text-[32px] font-bold">
              Réservez un appel
            </p>
            <p className="leading-5 text-lg">
              Un de nos conseillers pédagogiques vous rappellera dans les 24
              heures afin de faire le point sur votre demande de cours de
              soutien
            </p>
          </div>
          <AppointmentForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            error={error}
          />
          <div className="flex items-center mt-2  w-full justify-center">
            <button
              className={`self-start px-16 py-5 text-xl font-bold text-center rounded-[32px] shadow-[0px_5px_6px_rgba(0,50,80,0.1)] max-md:pr-6 max-md:pl-6 max-md:mt-10 text-[#0393D6] bg-white `}
              onClick={handleSubmit}
            >
              Prendre rendez-vous
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
