import Layout from "@/components/baselayout/layout";
import Appointment from "@/components/coursDeSoutien/appointment";
import Maintenance from "@/components/maintenancePage/maintenance";
import MaintenanceHero from "@/components/maintenancePage/maintenanceHero";

import React from "react";

export default function index() {
  return (
    <Layout title="Maintenance">
      <MaintenanceHero />
      <div className="px-8 lg:px-16 pb-24">
        <Maintenance />
        <Appointment />
      </div>
    </Layout>
  );
}
