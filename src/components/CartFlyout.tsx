import { useStore } from '@nanostores/preact';
import { cartItems, isCartOpen } from '../cartStore';
import { For, Show } from 'solid-js/web';
import styles from './CartFlyout.module.css';

export default function CartFlyout() {
  // const $isCartOpen = useStore(isCartOpen);
  // const $cartItems = useStore(cartItems);

  const emptyCart = <p>Your cart is empty!</p>;

  return (
    <aside hidden={isCartOpen()} class={styles.container}>
      <Show when={cartItems.length} fallback={emptyCart}>
        <ul class={styles.list} role="list">
          <For each={cartItems}>
            {(cartItem, index) => (
              <li class={styles.listItem}>
                <img
                  class={styles.listItemImg}
                  src={cartItem.imageSrc}
                  alt={cartItem.name}
                />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p>Quantity: {cartItem.quantity}</p>
                </div>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </aside>
  );
  // return (
  // 	<aside hidden={!$isCartOpen} className={styles.container}>
  // 		{Object.values($cartItems).length ? (
  // 			<ul className={styles.list} role="list">
  // 				{Object.values($cartItems).map((cartItem) => (
  // 					<li className={styles.listItem}>
  // 						<img className={styles.listItemImg} src={cartItem.imageSrc} alt={cartItem.name} />
  // 						<div>
  // 							<h3>{cartItem.name}</h3>
  // 							<p>Quantity: {cartItem.quantity}</p>
  // 						</div>
  // 					</li>
  // 				))}
  // 			</ul>
  // 		) : (
  // 			<p>Your cart is empty!</p>
  // 		)}
  // 	</aside>
  // );
}
