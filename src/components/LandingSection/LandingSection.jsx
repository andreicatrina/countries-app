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

const regions = [
  { name: "All", value: "all" },
  { name: "Africa", value: "africa" },
  { name: "Asia", value: "asia" },
  { name: "Europe", value: "europe" },
  { name: "America", value: "america" },
  { name: "Oceania", value: "oceania" },
  { name: "Antarctic", value: "antarctic" },
];

export const LandingSection = (props) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [openCard, setOpenCard] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(`new region or search ${selectedRegion} ${search}`);
    // filter search
    const filteredCountriesBySearch = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filteredCountries);

    // filter region
    let filteredCountriesByRegion;

    if (selectedRegion === "all") {
      filteredCountriesByRegion = filteredCountriesBySearch;
    } else {
      filteredCountriesByRegion = filteredCountriesBySearch.filter((country) => {
        return country.region.toLowerCase().includes(selectedRegion.toLowerCase());
      });
    }

    setFilteredCountries(filteredCountriesByRegion);
  }, [selectedRegion, search, countries]);

  useEffect(() => {
    getCountries();
  }, []);

  let api = "https://restcountries.com/v3.1/all";

  const getCountries = async function () {
    try {
      const response = await axios.get(api);
      // console.log(response.data);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function onChangeRegion(e) {
    console.log(e.target.value);
    setSelectedRegion(e.target.value);
  }

  function onChangeSearch(e) {
    console.log(e.currentTarget.value);
    setSearch(e.currentTarget.value);
  }

  function onClickOpenCard() {
    if (openCard === true) {
      setOpenCard(false);
    } else {
      setOpenCard(true);
    }
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
            <select onChange={onChangeRegion} name="" id="">
              {regions.map((region) => (
                <option value={region.value}>{region.name}</option>
              ))}
            </select>
          </FilterContainer>
        </FilterSearchContainer>
        <CountriesContainer>
          {filteredCountries.map((country) => {
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
      </LandingContainer>
    </Section>
  );
};

export const CountryCard = () => {
  return <div>aaa</div>;
};
