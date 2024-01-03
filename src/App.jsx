import  { useState } from 'react';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <button type="button" onClick={handleClick}>Fetch Pokemon</button>

      {/* Muestra la lista de nombres de Pokémon */}
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

