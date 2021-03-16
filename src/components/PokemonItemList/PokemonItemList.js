import React, { useEffect, useState } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { PokemonItem } from "../PokemonItem";
import { uuidv4 } from "../../helpers/functions";

export const PokemonItemList = ({ pokemonChunks }) => {
  const renderPokemon = (pokemon) => {
    const { num } = pokemon;
    return (
        <PokemonItem key={num} pokemon={pokemon} />
    );
  };

  return (
    <Card.Group itemsPerRow={4}>
      {pokemonChunks.map(renderPokemon)}
    </Card.Group>
  );
};
