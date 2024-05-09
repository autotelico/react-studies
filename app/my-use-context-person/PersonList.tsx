'use client';
import { useContext } from 'react';
import { Person, PersonListContext } from './context';

export default function PersonList(): React.ReactNode {
  const { personList, removeFromList }: any = useContext(PersonListContext);

  return (
    <>
      <ul>
        LIST
        {personList.map((person: Person) => (
          <li>
            I'm {person.name} and I am {person.age} years old.
            <button onClick={() => removeFromList(person)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
