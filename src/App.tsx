import { useReducer } from 'react';
import type { Item } from './types/types.ts';

const initialCart: Item[] = [];

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  function cartReducer(state, action) {
    switch (action.type) {
      case 'add':
        return;

      case 'toggle':
        return;

      case 'remove':
        return;

      case 'clear':
        console.log('sdadsds');
        return [...initialCart];

      default:
        throw new Error('Wrong!');
    }
  }

  return (
    <>
      <button onClick={() => dispatch({ type: 'clear' })}>Delete</button>
      <ul></ul>
    </>
  );
}

export default App;
