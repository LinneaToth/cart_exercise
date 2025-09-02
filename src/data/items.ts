import type { Object } from "../types/types.ts";

const items: Object[] = Array(20);
items.map((o, i) => {
  o.id = i;
  o.itemName = `Item number ${i}`;
});

export { items };
