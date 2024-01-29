async function FetchPokemons(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      mode: "cors",
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

let pokemonObjects = [];

pokemonObjects.push(await FetchPokemons("ditto"));
pokemonObjects.push(await FetchPokemons("pikachu"));
pokemonObjects.push(await FetchPokemons("bulbasaur"));
pokemonObjects.push(await FetchPokemons("squirtle"));
pokemonObjects.push(await FetchPokemons("torterra"));
pokemonObjects.push(await FetchPokemons("beedrill"));
pokemonObjects.push(await FetchPokemons("pidgey"));
pokemonObjects.push(await FetchPokemons("gengar"));
pokemonObjects.push(await FetchPokemons("caterpie"));
pokemonObjects.push(await FetchPokemons("charmander"));
pokemonObjects.push(await FetchPokemons("sandshrew"));
pokemonObjects.push(await FetchPokemons("nidoran-f"));

let pokemonImages = [];

let id = 0;

pokemonObjects.forEach((pokemon) =>
  pokemonImages.push({
    id: id++,
    name: pokemon.name,
    img: pokemon.sprites.other["offical-artwork"].front_default,
  }),
);

export { pokemonImages };
