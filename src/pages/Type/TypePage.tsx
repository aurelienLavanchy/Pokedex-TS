import { useLoaderData, useParams } from "react-router-dom";
import PokemonCard from "../../component/PokemonCard";
import "./TypePage.css";

type poketype = {
  id: number;
  name: string;
  pokedexId: number;
  image: string;
  apiTypes: { name: string; image: string }[];
};

export default function TypePage() {
  const type = useParams();
  const pokemons = useLoaderData() as poketype[];

  return (
    <>
      <h1>{type.name}</h1>
      <div className="pokemon-container">
        {pokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </>
  );
}
