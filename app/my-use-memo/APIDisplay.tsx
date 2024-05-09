'use client';

import { useState, useMemo, useEffect } from 'react';

export default function APIDisplay(): React.ReactNode {
  const [apiURL, setApiURL] = useState<string>('');
  const [characters, setCharacters] = useState<[]>([]);

  useEffect(() => {
    if (!characters.length) {
      fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCharacters(data.results)
          return data.results;
        })
        .catch((err) => console.error(err));
    }
  }, []);

  const apiResults = useMemo(async () => {
    try {
      const result = await getData();
      setCharacters(result.results);
      return result;
    } catch (error) {
      console.error(error);
    }
  }, [apiURL]);

  const handleClick = (newURL: string): void => {
    setApiURL(newURL);
    console.log(apiResults);
  };

  return (
    <div>
      <button
        onClick={() => handleClick('https://rickandmortyapi.com/api/location')}
        className="bg-red-500 p-2 font-semibold rounded-md m-3"
      >
        Set new API
      </button>
      {characters.map((character: any) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </div>
  );
}

function getData() {}
