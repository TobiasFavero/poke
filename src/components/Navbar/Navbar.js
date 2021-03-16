import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { HOME, MOVES } from "../../constants/sections";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState(HOME);

  return (
    <Menu>
      <Menu.Item
        name={HOME}
        active={activeItem === HOME}
        onClick={() => setActiveItem(HOME)}
      >
        Pokemons
      </Menu.Item>
      <Menu.Item
        name={MOVES}
        active={activeItem === MOVES}
        onClick={() => setActiveItem(MOVES)}
      >
        Moves
      </Menu.Item>
    </Menu>
  );
};
