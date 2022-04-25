import React, { useEffect, useState } from "react";
import Joke from "./Joke";


function RandomJoke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    const loadJoke = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      )
      const data = response.json()
      setJoke(data)
    };
    loadJoke();
  }, []);

  return( 
  <div>
      <Joke joke={joke}/>
  </div>
  )
}

export default RandomJoke;
