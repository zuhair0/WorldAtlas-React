import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SeatchFilter } from "../components/UI/SeatchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all"); //setting filter to 'all' to that we can see all the countries at first
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res.data);
      setCountries(res.data);
    });
  }, []);
  if (isPending) return <Loader />;

  // logic for filtering the countries based on the search input and filter selection
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
    <>
      <section className="country-section">
        <SeatchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
        <ul className="grid grid-four-cols">
          {filteredCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
};
