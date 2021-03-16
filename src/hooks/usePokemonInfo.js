import { useEffect, useState } from "react";
import { POKEDEX_NAME } from "../routes/pokemon-routes";

export const usePokemonInfo = (pokemon) => {
  const [pokemonDescription, setPokemonDescription] = useState({});

  const { name } = pokemon;

  useEffect(() => {
    fetch(`${POKEDEX_NAME}/${name}`)
      .then((resp) => resp.json())
      .then(({ variations } = {}) => {
        if (variations.length) {
          const variation = variations[0] || [];

          const { num, types, stats, evolutions, image } = variation;

          const replacedImage = image.replace("localhost", "localhost:8080");

          setPokemonDescription({ stats, image: replacedImage });
        }
      });
  }, [pokemon]);

  return [pokemonDescription];
};
