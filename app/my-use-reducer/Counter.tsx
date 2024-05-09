'use client';
import { useReducer } from 'react';

interface Counter {
  count: number;
  error: string;
}

interface Action {
  type: 'add' | 'subtract';
}

export default function Counter(): React.ReactNode {
  const reducer = (state: Counter, action: Action) => {
    switch (action.type) {
      case 'add': {
        const newCount = state.count + 1;
        const hasError = newCount > 5
        return {
            ...state,
            count: hasError ? state.count : newCount,
            error: hasError ? 'Maximum value reached' : null
        }
    }
    case 'subtract': {
        const newCount = state.count - 1;
        const hasError = newCount < 0
        return {
            ...state,
            count: hasError ? state.count : newCount,
            error: hasError ? 'Minimum value reached' : null
        }
      }
    }
  };

  const [counter, counterDispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => counterDispatch({ type: 'subtract' })}>-</button>
      Counter: {counter.count}
      <button onClick={() => counterDispatch({ type: 'add' })}>+</button>
      {counter.error && <div>{counter.error}</div>}
    </div>
  );
}
