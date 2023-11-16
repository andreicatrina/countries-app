import { React, useEffect, useState } from "react";
import axios from "axios";

import {
  CardContainer,
  CountriesContainer,
  CountryDetailContainer,
  FilterContainer,
  FilterSearchContainer,
  FlagContainer,
  LandingContainer,
  SearchContainer,
  Section,
} from "./components";

import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export const LandingSection = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    getCountries();
  }, []);

  let api = "https://restcountries.com/v3.1/all";

  const getCountries = async function () {
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <LandingContainer>
        <FilterSearchContainer>
          <SearchContainer>
            <FaSearch />
            <input type="search" />
          </SearchContainer>
          <FilterContainer>
            <select name="" id="">
              <option value="Filter by Region">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="America">America</option>
            </select>
          </FilterContainer>
        </FilterSearchContainer>
        <CountriesContainer>
          {countries.map((country) => {
            return (
              <CardContainer>
                <FlagContainer>
                  <img src={country.flags.svg} alt="" />
                </FlagContainer>
                <CountryDetailContainer>
                  <span>{country.name.common}</span>
                  <span>{`Capital: ${country.capital}`}</span>
                  <span>{`Population: ${country.population}`}</span>
                  <span>{`Region: ${country.region}`}</span>
                  <span>{`Subregion: ${country.subregion}`}</span>
                </CountryDetailContainer>
              </CardContainer>
            );
          })}
        </CountriesContainer>
      </LandingContainer>
    </Section>
  );
};
