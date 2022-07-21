import { isCartOpen, setCartOpen, addCartItem } from '../cartStore';
import type { CartItemDisplayInfo } from '../cartStore';
import 'solid-js';
import type { ParentComponent } from 'solid-js';

// type Props = {
// 	item: CartItemDisplayInfo;
// 	children: ComponentChildren;
// };

interface Props {
  item: CartItemDisplayInfo;
}

// export default function AddToCartForm({ item, children }: Props) {
// 	function addToCart(e: SubmitEvent) {
// 		e.preventDefault();
// 		isCartOpen.set(true);
// 		addCartItem(item);
// 	}

// 	return <form onSubmit={addToCart}>{children}</form>;
// }

const AddToCartForm: ParentComponent<Props> = (props) => {
  function addToCart(e: SubmitEvent) {
    e.preventDefault();
    setCartOpen(true);
    addCartItem(props.item);
  }

  return <form onSubmit={addToCart}>{props.children}</form>;
};

export default AddToCartForm;
