'use client';
import React, { FormEvent } from 'react';
import { PersonListContext } from './context';

export default function Form(): React.ReactNode {
  const { addToList }: any = React.useContext(PersonListContext);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const nameInput: HTMLInputElement = document.querySelector('#name')!;
    const ageInput: HTMLInputElement = document.querySelector('#age')!;
    addToList({ name: nameInput.value, age: ageInput.value });
  };

  return (
    <form>
      <input className="bg-slate-300" type="text" id="name" />
      <input className="block bg-slate-300 mt-2" type="number" id="age" />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
