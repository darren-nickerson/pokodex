import { useQuery } from "@tanstack/react-query";

export function usePoke({ id }) {
  const pokeQuery = useQuery(
    {
      queryKey: ["Pokemon", id],
      queryFn: () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        ),
    },

    { enabled: !!id }
  );
  return pokeQuery;
}
