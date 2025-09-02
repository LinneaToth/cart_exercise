import { useState } from "react";
import { items } from "./data/items.ts";
import type { Item } from "./types/types.ts";

function App() {
  console.log(items);
  return (
    <>
      <ul>
        {items.map((o) => (
          <li key={o.id}>
            {o.id} - {o.itemName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
