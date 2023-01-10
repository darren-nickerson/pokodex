import { usePokemon } from "../helpers/usePokemon";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const { data, isLoading, error } = usePokemon();
  if (isLoading === true)
    return (
      <p className="flex justify-center align-middle self-center mt-[200px] text-gray-600">
        Loadding
      </p>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 gap-4 max-w-[1800px] m-auto p-4">
      {data?.results.map((poke) => {
        return (
          <div key={poke.name}>
            <PokemonCard id={poke.name} index={poke.id + 1} />
          </div>
        );
      })}
    </div>
  );
}
