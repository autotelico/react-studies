import { useReducer } from 'react';

interface PersonState {
  name: string;
  age: number | null;
  nameError: string | null;
  ageError: string | null;
}

interface PersonAction {
  type: 'updateName' | 'updateAge';
  nextName: string;
  nextAge: number | null;
}

export default function NameDisplay(): React.ReactNode {
  const personReducer = (state: PersonState, action: PersonAction) => {
    switch (action.type) {
      case 'updateName': {
        const maxLength = 12;
        const hasError = action.nextName.length > maxLength;
        return {
          ...state,
          name: hasError ? state.name : action.nextName,
          nameError: hasError
            ? `Your name cannot be longer than ${maxLength} characters.`
            : null,
        };
      }
      case 'updateAge': {
        const maxAge = 120;
        const hasError = (() => {
            if (action.nextAge! > maxAge) {
                return true
            }
        })()
        return {
          ...state,
          age: hasError ? state.age : action.nextAge,
          ageError: hasError ? `Maximum age is ${maxAge}.` : null
        };
      }
      default:
        return state;
    }
  };

  const [person, personDispatch] = useReducer(personReducer, {
    name: '',
    age: null,
    nameError: null,
    ageError: null,
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    personDispatch({
      type: 'updateName',
      nextName: event.target.value,
      nextAge: person.age,
    });
  };

  return (
    <div>
      Name: <input type="text" placeholder='Your name' className='bg-slate-300' onChange={(e) => handleNameChange(e)} />
      {
        <p className={person.nameError ? 'text-red-500' : 'text-red-500 hidden'}>
          {person.nameError}
        </p>
      }
      Age:{' '}
      <input
        type="text"
        placeholder='Your age'
        onChange={(e) =>
          personDispatch({
            type: 'updateAge',
            nextName: person.name,
            nextAge: Number(e.target.value),
          })
        }
      />
      <p className='text-red-500'>{person.ageError}</p>
      <p>Name: {person.name}</p>
      <p>Age: {person.age ? person.age : null}</p>
    </div>
  );
}
