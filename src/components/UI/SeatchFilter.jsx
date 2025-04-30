export const SeatchFilter = ({ search, setSearch, filter, setFilter }) => {
    const handleInputValue = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
    };
    const handleSeleteChange = (e) => {
        e.preventDefault()
        setFilter(e.target.value);
    }
    return (
        <section className="section-searchFilter container"> 
            <input type="text" placeholder="search" value={search} onChange={handleInputValue}/>
            <div>
                <select className="select-section" value={filter} onChange={handleSeleteChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}