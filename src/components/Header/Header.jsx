import React from "react";
import { DarkModeContainer, HeaderContainer, HeaderSection, TitleContainer } from "./components";

import { FaMoon } from "react-icons/fa";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <TitleContainer>
          <h2>Where in the world?</h2>
        </TitleContainer>
        <DarkModeContainer>
          <FaMoon />
          <span>Dark Mode</span>
        </DarkModeContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
