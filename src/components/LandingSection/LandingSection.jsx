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
  SearchParentContainer,
  Section,
} from "./components";

import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export const LandingSection = (props) => {
  const [countries, setCountries] = useState([]);
  const [countries2, setCountries2] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCountries();
  }, []);

  let api = "https://restcountries.com/v3.1/all";

  const getCountries = async function () {
    try {
      const response = await axios.get(api);
      // console.log(response.data);
      setCountries(response.data);
      setCountries2(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function onClickOpenCard() {
    if (openCard === true) {
      setOpenCard(false);
    } else {
      setOpenCard(true);
    }
  }

  function onChangeFilterCountry(e) {
    console.log(e.target.value);
    if (e.target.value === "Europe") {
      let filteredCountries = countries.filter((country) => {
        return country.region === "Europe";
      });
      console.log(filteredCountries);
      setCountries2(filteredCountries);
    } else if (e.target.value === "Asia") {
      let filteredCountries = countries.filter((country) => {
        return country.region === "Asia";
      });
      console.log(filteredCountries);
      setCountries2(filteredCountries);
    } else if (e.target.value === "Africa") {
      let filteredCountries = countries.filter((country) => {
        return country.region === "Africa";
      });
      console.log(filteredCountries);
      setCountries2(filteredCountries);
    } else if (e.target.value === "America") {
      let filteredCountries = countries.filter((country) => {
        return country.region === "Americas";
      });
      console.log(filteredCountries);
      setCountries2(filteredCountries);
    } else if (e.target.value === "Oceania") {
      let filteredCountries = countries.filter((country) => {
        return country.region === "Oceania";
      });
      console.log(filteredCountries);
      setCountries2(filteredCountries);
    } else if (e.target.value === "Antarctic") {
      let filteredCountries = countries.filter((country) => {
        return country.region === "Antarctic";
      });
      console.log(filteredCountries);
      setCountries2(filteredCountries);
    } else if (e.target.value === "All") {
      console.log(countries);
      setCountries2(countries);
    }
  }

  function onChangeSearch(e) {
    console.log(e.currentTarget.value);
    setSearch(e.currentTarget.value);
  }

  return (
    <Section>
      <LandingContainer>
        <FilterSearchContainer>
          <SearchContainer>
            <FaSearch />
            <input onChange={onChangeSearch} type="search" />
            <button>Search</button>
          </SearchContainer>
          <FilterContainer>
            <label htmlFor="">Filter by Region</label>
            <select onChange={onChangeFilterCountry} name="" id="">
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="America">America</option>
              <option value="Oceania">Oceania</option>
              <option value="Antarctic">Antarctic</option>
            </select>
          </FilterContainer>
        </FilterSearchContainer>
        {search === "" ? (
          <CountriesContainer>
            {countries2.map((country) => {
              return (
                <CardContainer onClick={onClickOpenCard}>
                  <FlagContainer>
                    <img src={country.flags.svg} alt="" />
                  </FlagContainer>
                  {openCard ? (
                    <CountryDetailContainer>
                      <span>{country.name.common}</span>
                      <span>{`Capital: ${country.capital}`}</span>
                      <span>{`Population: ${country.population}`}</span>
                      <span>{`Region: ${country.region}`}</span>
                      <span>{`Subregion: ${country.subregion}`}</span>
                    </CountryDetailContainer>
                  ) : (
                    <IoIosArrowDown />
                  )}
                </CardContainer>
              );
            })}
          </CountriesContainer>
        ) : (
          <SearchParentContainer>
            {countries.map((country) => {
              if (country.name.common === search) {
                return (
                  <CardContainer onClick={onClickOpenCard}>
                    <FlagContainer>
                      <img src={country.flags.svg} alt="" />
                    </FlagContainer>
                    {openCard ? (
                      <CountryDetailContainer>
                        <span>{country.name.common}</span>
                        <span>{`Capital: ${country.capital}`}</span>
                        <span>{`Population: ${country.population}`}</span>
                        <span>{`Region: ${country.region}`}</span>
                        <span>{`Subregion: ${country.subregion}`}</span>
                      </CountryDetailContainer>
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </CardContainer>
                );
              }
            })}
          </SearchParentContainer>
        )}
      </LandingContainer>
    </Section>
  );
};
