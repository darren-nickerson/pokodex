import { Link, useParams } from "react-router-dom";
import { usePoke } from "../helpers/usePoke";

export default function PokemonDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = usePoke({ id });
  console.log(data);
  if (isLoading === true) return <p>Loading...</p>;

  if (error) return "An error has occurred: " + error.message;

  const dataColor = data?.types[0]?.type.name;

  return (
    <div className="flex flex-col">
      <div className="max-w-[280px]  m-auto ">
        <Link
          className={`text-xl px-8 py-4 rounded shadow text-white hover:bg-red-600 ==> bg-blue-600`}
          to={"/"}
        >
          Back to Pokodex
        </Link>
      </div>
      <div
        className={`flex max-w-[400px] rounded-xl m-auto mt-10 flex-col ${dataColor} shadow-xl mb-10`}
      >
        <h2 className="text-center rounded-t-xl text-3xl capitalize bg-yellow-400 text-gray-800 p-4 border-2 font-bold border-yellow-400 shadow-lg">
          {data.name}
        </h2>
        <span
          className={` w-[80%] mt-10 rounded-full p-10 m-8  py-4 mb-0 ${dataColor}`}
        >
          {
            <img
              className="w-[150px] h-[150px] m-auto hover:-translate-y-1 hover:scale-110 duration-300 "
              src={data.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
          }
        </span>
        <div
          className={`flex flex-col text-center gap-4 ${dataColor} p-4 capitalize rounded-b-xl`}
        >
          <div className="flex flex-row justify-center align-middle content-center border-b-2 border-black p-2">
            <span className="pr-2 font-bold"> Type: </span>
            {data.types.map((item, index, arr) => (
              <span className="pr-1" key={item.type.name}>
                {item.type.name} {index !== arr.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
          <div className="border-b-2 border-black p-2">
            <span className="pr-2 font-bold"> Weight: </span>
            <span>{data.weight / 10} kg</span>
          </div>
          <div className="border-b-2 border-black p-2">
            <span className="pr-2 font-bold"> Height: </span>
            <span>{data.height / 10} m</span>
          </div>
          <div>
            <span className="pr-2 font-bold"> Abilities: </span>
            <span>{data.abilities[0].ability.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
