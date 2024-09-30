import { googleTestimonial, trustPilotTestimonial } from "@/data/testimonial-data";
import React from "react";
import TestimonialCard from "./subComponents/testimonialCard";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="flex flex-col gap-y-10 py-10">
      <div>
        <Image src="google.svg" alt="testimonial" loading='eager' width={250} height={300} />
        <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-y-0  lg:gap-x-16">
          {googleTestimonial.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imgUrl={testimonial.imgUrl}
              commenter={testimonial.name}
              comment={testimonial.comments}
              imageDescription={testimonial.imgDescription}
            />
          ))}
          <div>
            <a
              href="https://www.google.com/search?sca_esv=2459ece37771d290&rlz=1C1UEAD_frFR959FR959&sxsrf=ADLYWILXKVvEh0p3yOhedQc1BpT6YIBFeQ:1722093943363&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dltbyFFWM6BZ3cGVJ3QSLr9exVnQrATbf78fsTXsuDA-GBMuzWb94tDfEdWU147LdATE9WIn0aS5uL5BSjUjKcHFgtIt6pNEYNfB2Zn77MykK2aI5CYn-GJkdc82HhA1yWjJeBQ&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7rGgadNRo7E_yWYvrG64Yjraz2-8CrGmBD1rRzQxlZUUCs-Kfbb3gW4WRlenicSS8u3pWQw%3D&q=Mission+Masters+Reviews&sa=X&ved=2ahUKEwiIgI7uw8eHAxXHXaQEHfWMKVgQ3PALegQIUBAF&biw=1920&bih=959&dpr=1&zx=1722093951793&no_sw_cr=1"
              target="_blank">
              <button className="bg-[#0393D6] text-xl text-white rounded-[32px] w-56  py-2 font-bold button-shadow">
                Voir plus
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Image src="trustpilot.svg" alt="testimonial" loading='eager' width={250} height={300} />
        <div className="flex flex-col lg:flex-row  gap-y-8 lg:gap-y-0  items-center gap-x-16">
          {trustPilotTestimonial.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imgUrl={testimonial.imgUrl}
              commenter={testimonial.name}
              comment={testimonial.comments}
              imageDescription={testimonial.imgDescription}
            />
          ))}
          <div>
            <a
              href="https://fr.trustpilot.com/review/missionmasters.fr"
              target="_blank">

              <button
                className="bg-[#0393D6] text-xl text-white rounded-[32px] w-56 px-4 py-2 font-bold button-shadow">
                Voir plus
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
