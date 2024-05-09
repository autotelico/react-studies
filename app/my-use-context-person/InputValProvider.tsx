import { useState } from 'react';
import { Person, PersonListContext } from './context';

export default function InputValProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [personList, setPersonList] = useState<Person[]>([
    {name: 'Carl', age: 22}
  ]);

  const addToList = (personToAdd: Person): void => {
    setPersonList([...personList, personToAdd])
  }

  const removeFromList = (personToRemove: Person): void => {
    setPersonList(personList.filter((person: Person) => person.name !== personToRemove.name))
  }

  return (
  <PersonListContext.Provider value={{personList, addToList, removeFromList}}>
    {children}
  </PersonListContext.Provider>
  )
}
