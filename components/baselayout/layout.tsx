import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  meta?: string;
}

export default function Layout({ children, title, meta }: LayoutProps) {
  return (
    <div className="bg-white h-full">
      <Head>
        <title>{title}</title>
        {meta && <meta name="description" content={meta} />}
      </Head>
      <Header />
      <div className="gap-10 flex flex-col mt-10 md:mt-20">{children}</div>
      <Footer />
    </div>
  );
}
