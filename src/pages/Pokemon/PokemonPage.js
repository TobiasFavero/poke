import React, { useEffect, useState } from "react";
import { PokemonItemList } from "../../components/PokemonItemList";
import { usePokemons } from "../../hooks/usePokemons";

export const PokemonPage = () => {
  const [pokemons] = usePokemons();

  return <PokemonItemList pokemonChunks={pokemons} />;
};
