import { useReducer } from 'react';

interface Counter {
  count: number;
  error: string | null;
}

interface Action {
  type: 'add' | 'subtract';
}

export default function CounterBox(): React.ReactNode {
  function reducer(state: Counter, action: Action) {
    switch (action.type) {
      case 'add': {
        const result = state.count + 1;
        const hasError = result > 5;
        return {
          ...state,
          count: hasError ? state.count : result,
          error: hasError ? 'Maximum reached' : null,
        };
      }
      case 'subtract': {
        const result = state.count - 1;
        const hasError = result < 0;
        return {
          ...state,
          count: hasError ? state.count : result,
          error: hasError ? 'Minimum reached' : null,
        };
      }
    }
  }

  const [counter, counterDispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div id="counter-box">
      <button onClick={() => counterDispatch({ type: 'add' })}>Add</button>
      <p>Count is {counter.count}</p>
      <button onClick={ () => counterDispatch({type: 'subtract'})}>Subtract</button>
      {counter.error && <span className='block'>{counter.error}</span>}
    </div>
  );
}
