import { Route, Routes } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";
import logo from "./assets/ass.png"; // Tell webpack this JS file uses this image
import Pokodex from "./pages/Pokedex";

function App() {
  return (
    <>
      <img className="w-80 m-auto my-10" src={logo} alt="pokimon" />

      <Routes>
        <Route path="/" element={<Pokodex />} />
        <Route path="/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;
