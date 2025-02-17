import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(resp => {
      setCharacters(resp.data);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Squad</h1>
      {
        characters.map((character,idx) => {
          return <Character key = {idx} character = {character}></Character>
        })
      }
    </div>
  );
}

export default App;
