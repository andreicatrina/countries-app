import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100%;
  background-color: ${(props) => props.background};
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px 24px;
`;

export const TitleContainer = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.color};
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${(props) => props.color};
  }
`;

export const DarkModeText = styled.span`
  color: ${(props) => props.color};
  cursor: pointer;
`;
