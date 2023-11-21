import React from "react";
import { Container, Content } from "./components";
import { Header } from "../../components/Header/Header";
import { LandingSection } from "../../components/LandingSection/LandingSection";

export const PageLayout = (props) => {
  return (
    <Container>
      <Header />
      <Content>{props.children}</Content>
    </Container>
  );
};
