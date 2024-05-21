import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios2 from "./hooks/useAxios2";


/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon] = useAxios2(
    // "pokemon",
    `https://pokeapi.co/api/v2/pokemon/`
  );

  // const addPokemon = async name => {
  //   const response = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/${name}/`
  //   );
  //   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
  // };
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(card => (
          <PokemonCard
            key={card.id}
            front={card.sprites.front_default}
            back={card.sprites.back_default}
            name={card.name}
            stats={card.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
