import { useQuery } from "@tanstack/react-query";

export function usePokemon() {
  const pokemonQuery = useQuery({
    queryKey: ["Pokemon"],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res) =>
        res.json()
      ),
  });

  return pokemonQuery;
}
