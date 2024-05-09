import { useReducer } from 'react';

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
  const { type } = action;
  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : state.count + 1,
        error: hasError ? 'Maximum reached' : null,
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : state.count - 1,
        error: hasError ? 'Minimum reached' : null,
      };
    }

    default:
      return state;
  }
}

export default function Counter(): React.ReactNode {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      {state.error && <div>{state.error}</div>}
    </div>
  );
}
