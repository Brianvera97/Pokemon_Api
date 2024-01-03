import { useState } from 'react';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);


  const handleClick = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0");

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPokemonList(data.results);
    }
    catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  }

  return (
    <>
      <button type="button" onClick={handleClick}>Fetch Pokemon</button>


      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

