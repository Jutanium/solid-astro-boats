import { isCartOpen, setCartOpen } from '../cartStore';

export default function CartFlyoutToggle() {
  return (
    <button onClick={() => setCartOpen((cartOpen) => !cartOpen)}>Cart</button>
  );
}
