import { styled } from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: var(--veryDarkBlue);
  min-height: 100vh;
`;

export const LandingContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px 24px;
`;

export const FilterSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  max-width: 360px;
  padding: 4px 8px;
  background-color: var(--darkBlue);

  input {
    width: 300px;
    height: 24px;
    border: none;
    background-color: var(--darkBlue);
    color: var(--white);
    padding-left: 8px;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
    color: var(--white);
  }
`;

export const FilterContainer = styled.div`
  select {
    background-color: var(--darkBlue);
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: auto 50%;
    border-radius: 2px;
    border: none;
    color: #ffffff;
    padding: 10px;

    // disable default appearance
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }

    @-moz-document url-prefix() {
      select {
        color: rgba(0, 0, 0, 0);
        text-shadow: 0 0 0 #ffffff;
      }
    }
  }
`;

export const CountriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 24px;
  padding-top: 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 280px;
  background-color: var(--darkBlue);
  border-radius: 8px;
`;

export const FlagContainer = styled.div`
  width: 100%;
  max-height: 160px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`;

export const CountryDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 12px;

  span {
    color: var(--white);
  }
`;
