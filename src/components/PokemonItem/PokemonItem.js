import React from "react";
import { Card, Grid, Image, Segment } from "semantic-ui-react";
import { POKEDEX_NAME } from "../../routes/pokemon-routes";
import { usePokemonInfo } from "../../hooks/usePokemonInfo";

export const PokemonItem = ({ pokemon }) => {
  const [pokemonDescription, setPokemonDescription] = usePokemonInfo(pokemon);

  const { stats, image } = pokemonDescription;
  const { num, name } = pokemon;

  return (
    <Card>
      <Image src={image} style={{ width: "150px", height: "150px" }} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">#{num}</span>
        </Card.Meta>
        {/* <Card.Description>
          {stats}
        </Card.Description> */}
      </Card.Content>
    </Card>
  );
};
