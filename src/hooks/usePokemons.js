import React, { useState, useEffect } from "react";
import { POKEDEX_ALL } from "../routes/pokemon-routes";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(POKEDEX_ALL)
      .then((resp) => resp.json())
      .then(({ data }) => {
        const pokes = data.map(({ num, name, image }) => {
          return { num, name, image };
        });

        const subPokes = pokes.slice(0, 30);

        setPokemons(subPokes);
      });
  }, []);

  return [pokemons];
};
