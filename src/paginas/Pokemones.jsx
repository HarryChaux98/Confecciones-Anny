import { useEffect, useState } from "react";
import imagen2 from "./pokemontest.png";
import imagen3 from "./pokebola.png";
function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((Response) => Response.json())
      .then((data) => setPokemones(data.results));
    // console.log(data.results);
  }, []);
  function verpok() {
    for (let i = 0; i <= 19; i++) {
      console.log(pokemones[i].name);
      // <p>{este es para agregar parrafo}</p>

      setLista((valor) => [...valor, <small>{pokemones[i].name}</small>]);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagen2}></img>
        <img className="btnClass" onClick={verpok}></img>
        {lista}
      </header>
    </div>
  );
}
export default Pokemones;
