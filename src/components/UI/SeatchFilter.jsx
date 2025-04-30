export const SeatchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputValue = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSeleteChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputValue}
      />
      <button onClick={() => sortCountries("asc")}>Asc</button>
      <button onClick={() => sortCountries("desc")}>Desc</button>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSeleteChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
