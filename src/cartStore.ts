// import { atom, map } from 'nanostores';

import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

const [isCartOpen, setCartOpen] = createSignal(false);

export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
  quantity: number;
};

export type CartItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc'>;

// export const cartItems = map<Record<string, CartItem>>({});
const [cartItems, setCartItems] = createStore<CartItem[]>([]);

export { isCartOpen, setCartOpen, cartItems };

export function addCartItem({ id, name, imageSrc }) {
  // const existingEntry = cartItems.get()[id];
  // if (existingEntry) {
  //   cartItems.setKey(id, {
  //     ...existingEntry,
  //     quantity: existingEntry.quantity + 1,
  //   });
  // } else {
  //   cartItems.setKey(id, {
  //     id,
  //     name,
  //     imageSrc,
  //     quantity: 1,
  //   });
  // }
  const existingEntry = cartItems.findIndex((item) => item.id == id);
  if (existingEntry > -1) {
    setCartItems(existingEntry, 'quantity', (quantity) => quantity + 1);
    return;
  }
  setCartItems((items) => [...items, { id, name, imageSrc, quantity: 1 }]);
}
