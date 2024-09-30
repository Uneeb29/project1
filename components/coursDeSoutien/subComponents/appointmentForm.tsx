import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--roboto-default'
});
interface AppointmentFormProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  error: string | null;
}
export default function AppointmentForm({ name, setName, email, setEmail, phone, setPhone,error }: AppointmentFormProps) {
  return (
    <div className={`flex flex-col gap-y-6 text-[#0393D6] pt-4 ${roboto.className}`}>
      <form className="flex flex-col gap-y-6 w-full relative">
        <div className="flex flex-col gap-y-2">
          <label className="font-bold leading-[19px]">Nom, Prénom</label>
          <input type="text" className="border-[1px] font-normal border-solid border-[#0393D6] outline-none  text-black rounded-lg p-2" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="font-bold leading-[19px]">Adresse email</label>
          <input type="email" placeholder='@' className="border-[1px]  font-normal border-solid border-[#0393D6] outline-none  text-black rounded-lg p-2 placeholder:text-[#0393D6]" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="font-bold leading-[19px]">N° de téléphone</label>
          <input type="tel" className="border-[1px] border-solid  font-normal border-[#0393D6] outline-none  text-black rounded-lg p-2" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        {error && <p className="text-red-500 text-sm absolute -bottom-5">{error}</p>}
      </form>
    </div>
  );
}
