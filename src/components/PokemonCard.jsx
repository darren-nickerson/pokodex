import { Link } from "react-router-dom";
import { usePoke } from "../helpers/usePoke";
import PokemonSkeletonCard from "./PokemonSkeletonCard";

function PokemonCard({ id }) {
  const { data, isLoading, error } = usePoke({ id });
  if (isLoading === true) return <PokemonSkeletonCard />;

  const dataColor = data?.types[0]?.type.name;

  if (error) return "An error has occurred: " + error.message;
  return (
    <Link to={`/${id}`}>
      <div
        className={`group flex flex-col justify-arround gap-10 justify-center items-center ${dataColor} border-2 00 h-auto p-2 py-8  rounded-xl shadow-sm hover:shadow-2xl groupn focus:outline-none focus:ring focus:ring-violet-300 `}
      >
        <p className=" flex flex-col justify-arround justify-center items-center bg-yellow-400 text-gray-900 rounded-full h-[42px] w-[42px] shadow">
          {data.id}
        </p>
        <img
          className="w-[90px] h-[90px]  rounded-xl group-hover:-translate-y-1 group-hover:scale-110 duration-300 cursor-pointer"
          src={data.sprites.other.dream_world.front_default}
          alt="pokemon"
        />
        {
          <p
            className={`py-1 capitalize group-hover:font-medium group-hover:text-gray-900  rounded-xl p-4`}
          >
            {data.name}
          </p>
        }
      </div>
    </Link>
  );
}

export default PokemonCard;
