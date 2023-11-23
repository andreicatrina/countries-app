import React, { useState } from "react";
import { DarkModeContainer, DarkModeText, HeaderContainer, HeaderSection, TitleContainer } from "./components";

import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export const Header = (props) => {
  const [lightMode, setLightMode] = useState(false);

  function onChangeLightMode() {
    if (lightMode === true) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  }

  return (
    <HeaderSection background={lightMode ? "var(--lightGray)" : "var(--darkBlue)"}>
      <HeaderContainer>
        <TitleContainer color={lightMode ? "var(--darkGrayLigh)" : "var(--white)"}>
          <h2>Where in the world?</h2>
        </TitleContainer>
        <DarkModeContainer>
          {lightMode ? (
            <FaMoon color={lightMode ? "var(--darkGrayLigh)" : "var(--white)"} />
          ) : (
            <FiSun color={lightMode ? "var(--darkGrayLigh)" : "var(--white)"} />
          )}

          <DarkModeText color={lightMode ? "var(--darkGrayLigh)" : "var(--white)"} onClick={onChangeLightMode}>
            {lightMode ? "Dark Mode" : "Light Mode"}
          </DarkModeText>
        </DarkModeContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
