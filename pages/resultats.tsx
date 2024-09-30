import Layout from "@/components/baselayout/layout";
import Appointment from "@/components/coursDeSoutien/appointment";
import Cards from "@/components/coursDeSoutien/cards";
import CoursHero from "@/components/coursDeSoutien/coursHero";
import Testimonial from "@/components/coursDeSoutien/testimonial";
import React from "react";

export default function index() {
  return (
    <Layout title="Nos résultats">
      <CoursHero />
      <div className="flex flex-col p-8 lg:p-16 gap-y-10">
        <Cards />
        <Testimonial />
        <Appointment />
      </div>
    </Layout>
  );
}
