import React from "react";

export default function PokemonSkeletonCard() {
  return (
    <div className="flex flex-col justify-arround gap-10 justify-center items-center bg-gray-100 border-2 00 h-auto p-8 rounded-xl animation-pulse">
      <p className=" bg-slate-200 rounded-full h-[42px] w-[42px] m-auto"></p>
      <p className=" bg-slate-200 h-[100px] w-[100px] m-auto rounded-xl"></p>
      <p className=" bg-slate-200 rounded-full h-[30px] w-[100px] m-auto"></p>
    </div>
  );
}
