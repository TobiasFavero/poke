export const loadPokemons = async (pokemons) => {
  return pokemons.map(async ({ url, name }) => {
    const resp = await fetch(url);
    const data = await resp.json();
    const { stats } = data;

    const mappedStats = stats.map((s) => {
      return { [s.stat.name]: s.base_stat };
    });

    const { attack } = mappedStats[1];

    return { key: name, name, attack };
  });
};
