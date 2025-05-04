import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-gradient-to-br from-[#2e2e3e] via-[#444] to-[#2e2e3e] p-6 rounded-3xl shadow-[0_4px_15px_rgba(0,255,255,0.4)] hover:shadow-[0_8px_20px_rgba(0,255,255,0.6)] transform hover:-translate-y-1 transition duration-300 ease-in-out text-center cursor-pointer">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto mb-4 w-28 h-28 drop-shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <h2 className="capitalize font-extrabold text-2xl text-gray-100 tracking-wide">
        #{pokemon.id} {pokemon.name}
      </h2>
      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        {pokemon.types.map((typeObj) => (
          <span
            key={typeObj.slot}
            className="text-sm bg-[#333] border border-gray-600 shadow-sm text-gray-300 font-semibold rounded-full px-4 py-1 capitalize transition-all duration-200 hover:bg-blue-700 hover:text-white"
          >
            {typeObj.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
