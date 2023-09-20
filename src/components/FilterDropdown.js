const FilterDropdown = ({ onFilterChange }) => {
  const filterOption = ["All", "Packed", "Unpacked"];

  return (
    <div className="filter-dropdown">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        {filterOption.map((filterItem) => (
          <option value={filterItem}>{filterItem}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
