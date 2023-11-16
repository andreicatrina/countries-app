import React from "react";
import { PageLayout } from "../PageLayout/PageLayout";
import { Header } from "../../components/Header/Header";
import { LandingSection } from "../../components/LandingSection/LandingSection";

export const Landing = () => {
  return (
    <PageLayout>
      <Header />
      <LandingSection />
    </PageLayout>
  );
};
