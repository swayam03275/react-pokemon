import React from "react";

const types = [
  "All", "Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting",
  "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark",
  "Dragon", "Steel", "Fairy"
];

const SearchBar = ({ search, onSearch, typeFilter, onTypeFilter }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="p-3 border border-gray-600 bg-[#333] text-gray-100 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      />
      <select
        value={typeFilter}
        onChange={(e) => onTypeFilter(e.target.value)}
        className="p-3 border border-gray-600 bg-[#333] text-gray-100 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      >
        {types.map((type) => (
          <option key={type} value={type} className="bg-[#333] text-gray-100">
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
