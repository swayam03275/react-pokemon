import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import Loader from "./components/Loader";
import Error from "./components/Error";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();
        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );
        setPokemons(details);
        setFilteredPokemons(details);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Pokémon data.");
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    let result = pokemons;
    if (search) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (typeFilter !== "All") {
      result = result.filter(p =>
        p.types.some(t => t.type.name === typeFilter.toLowerCase())
      );
    }
    setFilteredPokemons(result);
  }, [search, typeFilter, pokemons]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-[#1e1e2f] bg-opacity-80 border border-gray-700 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-8 transition-all duration-300">
          <Header />
          <div className="mt-6">
            <SearchBar
              search={search}
              onSearch={setSearch}
              typeFilter={typeFilter}
              onTypeFilter={setTypeFilter}
            />
          </div>
          <div className="mt-10">
            <PokemonList pokemons={filteredPokemons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
